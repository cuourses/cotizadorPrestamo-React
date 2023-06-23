const formatearCantidad = (cantidad) => {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formater.format(cantidad);
};

export default formatearCantidad;