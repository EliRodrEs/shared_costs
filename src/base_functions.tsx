export function getTotalCost(costsRepositoryAmounts: Array<number>){
  return costsRepositoryAmounts.reduce((acc: number, current: number) =>  acc + current, 0)
}

export function getPersonalPayments(){

};

export function getPersonalDebt(totalCost: number, friends: number, personalPayments: number) {
  return totalCost / friends - personalPayments;
}
