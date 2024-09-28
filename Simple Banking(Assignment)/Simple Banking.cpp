#include <iostream>
#include <stack>
#include <fstream>
#define MIN_BALANCE 500
using namespace std;

class Account {
    string firstname, lastname;
    int accountnumber;
    int balance;
    public:
        void setFname(string setfname);
        void setLname(string setlname);
        void setAccNo(int accNo);
        void setBalance(int setbalance);
        Account(string fname = " ", string lname = " ", int accNo= 0) {
            setFname(fname);
            setLname(lname);
            setAccNo(accNo);
        }
        string getFname();
        string getLname();
        int getAccNo();
        int getBalance();
        void getWithdrawal(int wtd);
        int getDeposit(int dpo);
        //~Account();
};



void Account::setFname(string fname) {
    firstname = fname;
}

void Account::setLname(string lname) {
    lastname = lname;
}

void Account::setAccNo(int accNo) {
    accountnumber = accNo;
}

void Account::setBalance(int sbalance) {
    try {
        if(sbalance < MIN_BALANCE){
            throw 100;
        }
         balance = sbalance;
    }
    catch(int e){
        cout << "\nError: " << e;
        cout << "\nMinimum Balance: " << MIN_BALANCE;
    }
}

string Account::getFname(){
    return firstname;
}

string Account::getLname(){
    return lastname;
}

int Account::getAccNo(){
    return accountnumber;
}

int Account::getBalance(){
    return balance;
}

void Account::getWithdrawal(int wtd) {
    fstream fi;
    fi.open("account.txt", ios::in | ios::app);
    try {
    if(balance - wtd < MIN_BALANCE) {
        throw 101;
    }
    balance -= wtd;
    fi << "\withdrawal: " << wtd;
    }
    catch(int e){
        cout << "\nError:101\withdrawal cannot exceed " << MIN_BALANCE;
    }
    fi.close();
}

int Account::getDeposit(int dpo) {
    fstream fi;
    fi.open("account.txt", ios::in | ios::app);
    balance += dpo;
    fi << "\nDeposit: " << dpo;
    fi.close();
    return balance;
}

int main() {
    fstream fi;
    fi.open("account.txt", ios::in | ios:: out | ios::trunc);
    Account a;
    string fname, lname;
    int accNo, balance, choice, deposit, withdraw;
    cout << "***Banking System***";
    cout << "\nEnter First Name: ";
    cin >> fname;
    a.setFname(fname);
    fi << "First Name: " << fname << endl;
    cout << "\nEnter Last Name: ";
    cin >> lname;
    a.setLname(lname);
    fi << "Last Name: " << lname << endl;
    cout << "Enter A/c No : ";
    cin >> accNo;
    a.setAccNo(accNo);
    fi << "A/c No: " << accNo << endl;
    cout << "\nEnter Balance: ";
    cin >> balance;
    a.setBalance(balance);
    while(choice !=4) {
        cout << "\n1)Deposit";
        cout << "\n2)Withdraw";
        cout << "\n3)Display Current Balance";
        cout << "\n4)Exit";
        cout << "\nSelect any given option to proceed: ";
        cin >> choice;
        switch(choice) {
            case 1:
                cout << "\nEnter Deposit Amount: ";
                cin >> deposit;
                a.getDeposit(deposit);
                break;

            case 2:
                cout << "\nEnter Withdrawal Amount: ";
                cin >> withdraw;
                a.getWithdrawal(withdraw);
                break;

            case 3:
                cout << "\nYour Current Balance: " << a.getBalance();
                break;

            case 4:
                break;

            default:
                cout << "\nEnter Valid Option";
                break;
        }
    }
    fi.close();
    return 0;
}
