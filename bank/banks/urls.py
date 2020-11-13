from rest_framework import routers
from .api import BankViewSet, BranchViewSet

router = routers.DefaultRouter()
router.register('api/bank', BankViewSet, 'Bank')
router.register('api/branch', BranchViewSet, 'Branch')
urlpatterns = router.urls
