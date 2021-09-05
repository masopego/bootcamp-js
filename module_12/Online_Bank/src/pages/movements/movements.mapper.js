export const mapMovementsListApiToVm = (movementsList) =>
  Array.isArray(movementsList)
    ? movementsList.map((movement) => ({
        ...movement,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(
          movement.realTransaction
        ).toLocaleDateString(),
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
      }))
    : [];
