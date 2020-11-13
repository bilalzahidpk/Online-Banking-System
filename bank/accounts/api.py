from rest_framework import viewsets, permissions
from .serializers import AccountSerializer, ComplainSerializer, BillSerializer, LoanSerializer
from .models import Account, Complain, Bill, Loan


class AccountViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = AccountSerializer
    queryset = Account.objects.all()


class ComplainViewSet(viewsets.ModelViewSet):
    queryset = Complain.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ComplainSerializer

    def perform_create(self, serializer):
        serializer.save(complaint_issuer=self.request.user)


class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def perform_create(self, serializer):
        serializer.save(bill_payer=self.request.user)

    serializer_class = BillSerializer


class LoanViewSet(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def perform_create(self, serializer):
        serializer.save(loan_taker=self.request.user)

    serializer_class = LoanSerializer
