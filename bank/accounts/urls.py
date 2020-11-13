from rest_framework.routers import DefaultRouter
from .api import AccountViewSet, ComplainViewSet, BillViewSet, LoanViewSet

router = DefaultRouter()
router.register(r'account', AccountViewSet, base_name='accounts')
router.register(r'complain', ComplainViewSet, base_name='complaints')
router.register(r'bill', BillViewSet, base_name='bills')
router.register(r'loan', LoanViewSet, base_name='loans')
urlpatterns = router.urls
