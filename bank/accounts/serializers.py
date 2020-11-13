
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account import app_settings as allauth_settings
from allauth.account.utils import setup_user_email
from allauth.account.adapter import get_adapter
from allauth.utils import email_address_exists
from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.models import Account, Complain, Bill, Loan
from rest_framework.response import Response


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('mobile_number', 'current_balance', 'savings_balance',)

    # def update(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     instance.mobile_number = request.data.get("mobile_number")
    #     instance.current_balance = request.data.get("current_balance")
    #     instance.savings_balance = request.data.get("savings_balance")
    #     instance.save()
    #     serializer = self.get_serializer(instance)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)


class ComplainSerializer(serializers.ModelSerializer):

    class Meta:
        model = Complain
        fields = ('complaint',)

        def perform_create(self, serializer):
            serializer.save(complaint_issuer=self.request.user)


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('bill_type', 'bill_amount',)

    def perform_create(self, serializer):
        serializer.save(bill_payer=self.request.user)


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ('loan_name', 'loan_amount', 'loan_period',)

    def create(self, validated_data):
        return Loan.objects.create(**validated_data)

    def perform_create(self, serializer):
        serializer.save(loan_taker=self.request.user)


class RegistrationSerializer(RegisterSerializer):

    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    mobile_number = serializers.CharField(required=False)

    def custom_signup(self, request, user):
        account = Account.objects.get_or_create(user=user)[0]
        user.first_name = self.validated_data.get('first_name', '')
        user.last_name = self.validated_data.get('last_name', '')

        account.mobile_number = self.validated_data.get('mobile_number', '')
        user.save()
        account.save()
