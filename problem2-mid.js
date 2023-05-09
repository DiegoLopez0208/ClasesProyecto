const humanizeDate = (championShipDate) => {
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const day = championShipDate.getDate();
    const month = months[championShipDate.getMonth()];
    const year = championShipDate.getFullYear();
    const rightNowDate = new Date();
    const differenceDays = rightNowDate - championShipDate;
    const days = Math.floor(differenceDays / (1000 * 60 * 60 * 24));
    return `Pasaron ${days} desde el ${day} de ${month} de ${year}`;
  };
  
  const victoryDateArgentina = new Date(2022, 11, 18);
  console.log(humanizeDate(victoryDateArgentina));