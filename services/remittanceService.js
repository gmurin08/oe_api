/*IN: req.body.employees - is [{emp_id}], req.body.contract_id, req.body.period_covered, 
      req.body.cash_code */
//OUT: contractor_deposit, contractor_distribution, member_deposit, member_distribution
//Note: req.body.contract_id will be best stored as an array of objects in contractor model

//Generate via req to employee db. Query by name and get member_id and name
const employees = [
    {
        member_id:'Chris Addenbrooke',
        hours:100.50
    },
    {
       member_id:'Ray Colbran',
       hours:120 
    },
    {
        member_id:'Tad MacCook',
        hours:200
    },
    {
        member_id:'Richard McOrkill',
        hours:120
    },
]


const contract = [
    {
        fund_id:34,
        rate:2,
    },
    {
        fund_id:20,
        rate:12,
    },
    {
        fund_id:149,
        rate:0.50
    },
    {
        fund_id:40,
        rate:1
    },
]

const contractor_num = 6085
const period_covered = new Date('1/1/2023')
//generate this on the fly with a req to corresponding contractor's deposits to get the last deposit number
const deposit_num = 10001
const cash_code = 1

const hours = employees.reduce((accumulator, employee)=>{
    return accumulator + employee.hours
},0)

const totalContractRate = contract.reduce((accumulator, fund)=>{
    return accumulator + fund.rate
},0)

const gross = hours * totalContractRate


const contractorDeposit = {
    contractor_num:contractor_num,
    //@todo:MAKE SURE THEY'RE IN THE SYSTEM BEFORE THIS GETS SENT TO DB
    employees:employees,
    num_employees:employees.length,
    //TODO:Add county code to deposit
    period_covered:period_covered,
    transaction_date: new Date(),
    last_updated: new Date(),
    deposit_num:deposit_num,
    //TODO:ASK ABOUT POST DATE
    contract:contract,
    hours:hours,
    gross:gross,
}

const contractorDistribution = []

contract.forEach(contract=>{
    contractorDistribution.push( {
        fund_id:contract.fund_id,
        amount:contract.rate * hours
    })
})

const contractDistribGross = contractorDistribution.reduce((accumulator, fund)=>{
    return accumulator + fund.amount
},0)

contractDistribGross === gross ? console.log('Contractor Distribution Amounts Match!') 
 : console.log('Contractor Distribution Amounts Do Not Match!')

var deposit_amt = 0
employees.forEach((employee)=>{
    const deposit = []
    const distribution = []
    contract.forEach(contract=>{
        distribution.push(
            {
                fund_id:contract.fund_id,
                amount:contract.rate * employee.hours,
                period_covered:period_covered,
                deposit_num:deposit_num,
                cash_code:cash_code,
                member_id:employee.member_id
            })
        deposit_amt += contract.rate * employee.hours
    })
    deposit.push(
        {
            /*Finish this after the contractor portion of the logic to get the data from it*/
            member_id:employee.member_id,
            //Change this to the contract passed in by the controller
            contract:9089,
            contractor_num:contractor_num,
            contractor_deposit:"objectId('contractor_deposit')",
            cash_code:3
        }
    )
    if(employees[employees.length-1] === employee){
        if (deposit_amt === gross){
            console.log('Member Distribution Amounts Match!')
        }else{
            console.log(' deposit amount does not match gross amount')
        }
    }

})







