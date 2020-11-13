from banks.models import Bank, Branch
from rest_framework import viewsets, permissions
from .serializers import BankSerializer, BranchSerializer


class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = BranchSerializer


class BankViewSet(viewsets.ModelViewSet):
    queryset = Bank.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = BankSerializer
