
const declension = (t,number) => {
  const cases = [2, 0, 1, 1, 1, 2];  
  const counte =  (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]
    return `${t(`home.declension.found${counte+1}`)} ${number} ${t(`home.declension.country${counte+1}`)}`;
}
export default declension;
