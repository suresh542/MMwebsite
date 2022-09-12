import * as Yup from "yup";

const MobileRegex = /^[6-9]\d{9}$/;
// Minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const PassWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const onlyCharSpace = /^[a-zA-Z ]*$/;


export const signUpFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is Required").email("Enter a valid Email Id"),

});


export const contactUsUpFormValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is Required").email("Enter a valid Email Id"),

});


export const brandingFormValidationSchema = Yup.object().shape({

  name: Yup.string().required("Name is Required"),
  address: Yup.string().required("Address is Required"),
  
  countryId: Yup.string().required("Country of residence is Required"),
  phone: Yup.string().matches(MobileRegex, "Phone number is not valid").required(" Phone Number is Required"),

  email: Yup.string().required("Email is Required").email("Enter a valid Email Id"),
  dob: Yup.string().required("Date Of Birth is Required"),

  munchMagicMakerAns: Yup.string().required("Answer is Required"),
  preExpStatus: Yup.string().required("Answer is Required"),


  expGrounOnlineAns: Yup.string().required("Answer is Required"),
  ambassadorAns: Yup.string().required("Answer is Required"),

  favoriteFoodAns: Yup.string().required("Answer is Required"),
  ngoPassinate: Yup.string().required("Answer is Required"),

  description: Yup.string().required("Answer is Required"),
  signatureURL: Yup.string().required("Signature is Required"),


});




export const restaurantFormValidationSchema = Yup.object().shape({

  restaurantName: Yup.string().required("Restaurant Name is Required"),
  contactNumber: Yup.string().matches(MobileRegex, "Contact Number is not valid").required(" Contact Number is Required"),


  email: Yup.string().required("Email is Required").email("Enter a valid Email Id"),
  address: Yup.string().required("Address is Required"),

  country: Yup.string().required("country  is Required"),
  state: Yup.string().required("State  is Required"),

  city: Yup.string().required("City is Required"),
  zipCode: Yup.number().typeError('Should be a number').required("ZipCode is Required "),

  licenceNumber: Yup.string().required("Licence Number is Required"),
  description: Yup.string().required("Description is Required"),

  ownerName: Yup.string().required(" Restaurant Owner Name is Required"),
  ownerContactNumber: Yup.string().matches(MobileRegex, "Contact Number is not valid").required(" Contact Number is Required"),


  ownerEmail: Yup.string().required("Restaurant Owner Email is Required").email("Enter a valid Email Id"),
  userType: Yup.string().required("User Type is Required"),

  franchiseCount: Yup.number().typeError('Should be a number') .nullable(),


  

  //------------------2nd tab--------------------------------------------------
  restaurantTypeMapping: Yup.string().required("restaurant Type is Required"),
  preparationTime: Yup.string().required("Preparation Time is Required"),
  alldaysOpenHours: Yup.string().required("OpenHours is Required"),
  alldaysClosedHours: Yup.string().required("ClosedHours is Required"),


  //-----------------3rd tab------------------------------------------------

  companyName: Yup.string().required("CompanyName is Required"),
  authorizeNameFinal: Yup.string().required("Name  is Required"),
  accountAddress: Yup.string().required("Address is Required"),

  accountCity: Yup.string().required("City is Required"),
  accountState: Yup.string().required("State is Required"),


  accountZipCode: Yup.number().typeError('Should be a number').required("ZipCode is Required"),
  socialSecurity: Yup.string().required("Social Security is Required"),

  accountName: Yup.string().required("Account Name is Required"),
  bankName: Yup.string().required("Bank Name is Required"),

  accountNumber: Yup.number().typeError('Should be a number').required("Account Number is Required"),
  routingNumber: Yup.number().typeError('Should be a number').required("Routing Number is Required"),

  accountType: Yup.string().required("Account Type is Required"),
  signName: Yup.string().required("Name is Required"),

  // signatureURL: Yup.string().required("Signature is Required"),
  signdate: Yup.string().required("Date is Required"),

  // authorizeName: Yup.string().required("authorizeName is Required"), 
  // country: Yup.string().required("Country is Required"),    
  // signName: Yup.string().required("Name is Required"),             






});


