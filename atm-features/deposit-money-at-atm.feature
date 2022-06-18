Feature:Transact money at ATM
As a Bank Owner, I want to increase my Clients interactions with their accounts by introducing
 ATMs

Rule:Withdraw money
Background:Setting Account transaction conditions
  Given that account has UGX 100000
  And transaction fees of UGX 5000
  But maintaining minimum balance of UGX 20000

@Withdraw @Success
Example:Successful withdrawal
  When I withdraw UGX 50000
  Then Account balance is 45000

@Withdraw @Failure
Example:Failed withdrawal
When I withdraw UGX 80000
Then Account balance is 95000

