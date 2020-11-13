from rest_framework import serializers
from banks.models import Bank, Branch


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class BankSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bank
        fields = ('bank_name', 'bank_head_office', 'bank_uan')
