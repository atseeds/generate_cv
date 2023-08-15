// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
export const countries = [
  { code: "VN", label: "Viet Nam", phone: "84" },
  { code: "US", label: "United States", phone: "1" },
  { code: "CN", label: "China", phone: "86" },
  { code: "JP", label: "Japan", phone: "81" },
  { code: "DE", label: "Germany", phone: "49" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "FR", label: "France", phone: "33" },
  { code: "IN", label: "India", phone: "91" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "RU", label: "Russia", phone: "7" },
  { code: "KR", label: "South Korea", phone: "82" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "AU", label: "Australia", phone: "61" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "TR", label: "Turkey", phone: "90" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "PL", label: "Poland", phone: "48" },
  { code: "IR", label: "Iran", phone: "98" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "IQ", label: "Iraq", phone: "964" },
  { code: "SY", label: "Syria", phone: "963" },
  { code: "KP", label: "North Korea", phone: "850" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  { code: "MM", label: "Myanmar (Burma)", phone: "95" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "CD", label: "Democratic Republic of the Congo", phone: "243" },
  { code: "TZ", label: "Tanzania", phone: "255" },
  { code: "AR", label: "Argentina", phone: "54" },
];

const filterString = (firstString, secondString) => {
  if (
    firstString.toLowerCase().replace(/\s+/g, "") ==
    secondString.toLowerCase().replace(/\s+/g, "")
  ) {
    return true;
  }
  return false;
};

export const getCities = (province) => {
  const arr = [];
  for (const city of data) {
    let result = filterString(city.name, province);
    if (result == true) {
      city.districts.map((district) => {
        arr.push(district.name);
      });
    }
  }
  return arr;
};
