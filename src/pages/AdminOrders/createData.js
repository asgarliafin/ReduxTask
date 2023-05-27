function createData(name, address, orders) {
    const la = orders?.map((e) => ({
      title: e.title,
      price: e.price,
      description: e.description,
    }));
    return {
      name,
      address,
      orders: la,
    };
}

export default createData;