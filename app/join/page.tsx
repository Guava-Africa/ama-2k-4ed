// src/app/join/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faCalendar, 
  faIdCard, 
  faVenusMars, 
  faPhone, 
  faBriefcase,
  faCity,
  faHome,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  nationalId: string;
  gender: string;
  phoneNumber: string;
  address: string;
  occupation: string;
  province: string;
  placeOfBirth: string;
  currentDistrict: string;
  declaration: boolean;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
};

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      nationalId: '',
      gender: '',
      phoneNumber: '',
      address: '',
      occupation: '',
      province: '',
      placeOfBirth: '',
      currentDistrict: '',
      declaration: false,
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
    }
  });

  const questions = [
    { id: 1, name: "question1", text: "I am a Zimbabwean citizen aged 18-35" },
    { id: 2, name: "question2", text: "I agree to actively participate in movement activities" },
    { id: 3, name: "question3", text: "I commit to upholding the movement's values and principles" },
    { id: 4, name: "question4", text: "I am willing to contribute my skills to community projects" },
    { id: 5, name: "question5", text: "I understand the responsibilities of being a member" },
    { id: 6, name: "question6", text: "I support the movement's vision for youth empowerment" },
  ];

  const provinces = [
    "Bulawayo", "Harare", "Manicaland", "Mashonaland Central", 
    "Mashonaland East", "Mashonaland West", "Masvingo", 
    "Matabeleland North", "Matabeleland South", "Midlands"
  ];

  const onSubmit = async (data: FormData) => {
    // Check if all questions are answered
    const allQuestionsAnswered = data.question1 && data.question2 && data.question3 && 
                                 data.question4 && data.question5 && data.question6;
    
    if (!allQuestionsAnswered) {
      alert('Please answer all membership questions');
      return;
    }
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50 py-8 md:py-12 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8"
        >
          <img src="https://flagcdn.com/zw.svg" alt="Zimbabwe Flag" width={40} height={40} className='mx-auto mb-4'/>
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Join the Movement</h1>
          <p className="text-gray-600 text-sm sm:text-base px-4">Complete the form below to become a member of RE:GEN Movement</p>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700 text-center text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Application submitted successfully! Check your email for confirmation.
          </motion.div>
        )}

        {/* Signup Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8"
        >
          {/* Personal Information Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-yellow-400">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Enter first name"
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Last Name *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Enter last name"
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Date of Birth *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <input
                    type="date"
                    {...register("dob", { required: "Date of birth is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  />
                </div>
                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
              </div>

              {/* National ID */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  National ID *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faIdCard} />
                  </div>
                  <input
                    type="text"
                    {...register("nationalId", { required: "National ID is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Enter National ID"
                  />
                </div>
                {errors.nationalId && <p className="text-red-500 text-xs mt-1">{errors.nationalId.message}</p>}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Gender *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faVenusMars} />
                  </div>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <input
                    type="tel"
                    {...register("phoneNumber", { required: "Phone number is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="+263 77 123 4567"
                  />
                </div>
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
              </div>
            </div>
          </div>

          {/* Address & Location Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-green-400">Address & Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Address *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <input
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Street address"
                  />
                </div>
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Occupation *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <input
                    type="text"
                    {...register("occupation", { required: "Occupation is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                    placeholder="Student, employed, entrepreneur, etc."
                  />
                </div>
                {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Province *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FontAwesomeIcon icon={faCity} />
                  </div>
                  <select
                    {...register("province", { required: "Province is required" })}
                    className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  >
                    <option value="">Select province</option>
                    {provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
                {errors.province && <p className="text-red-500 text-xs mt-1">{errors.province.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  {...register("placeOfBirth", { required: "Place of birth is required" })}
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="City/Town"
                />
                {errors.placeOfBirth && <p className="text-red-500 text-xs mt-1">{errors.placeOfBirth.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Current District *
                </label>
                <input
                  type="text"
                  {...register("currentDistrict", { required: "Current district is required" })}
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                  placeholder="Enter your current district"
                />
                {errors.currentDistrict && <p className="text-red-500 text-xs mt-1">{errors.currentDistrict.message}</p>}
              </div>
            </div>
          </div>

          {/* Membership Questions Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-red-400">Membership Application</h2>
            <p className="text-sm text-gray-600 mb-4">Please answer all questions honestly</p>
            <div className="space-y-4">
              {questions.map((q) => (
                <div key={q.id} className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  <p className="font-semibold mb-3 text-sm md:text-base">{q.id}. {q.text}</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="yes"
                        {...register(q.name as keyof FormData, { required: "Please answer this question" })}
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-sm md:text-base">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        value="no"
                        {...register(q.name as keyof FormData, { required: "Please answer this question" })}
                        className="w-4 h-4 text-red-500"
                      />
                      <span className="text-sm md:text-base">No</span>
                    </label>
                  </div>
                  {errors[q.name as keyof FormData] && (
                    <p className="text-red-500 text-xs mt-2">Please answer this question</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Declaration Section */}
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-base md:text-lg mb-3">Declaration</h3>
            <p className="text-xs md:text-sm text-gray-700 mb-4 leading-relaxed">
              I hereby declare that the information provided in this application is true and correct to the best of my knowledge. 
              I understand that providing false information may lead to disqualification or termination of membership. 
              I agree to abide by the constitution, rules, and regulations of RE:GEN Movement. 
              I commit to actively participating in the movement's activities and upholding its values of empowering youth, 
              transforming lives, and building a brighter future for Zimbabwe.
            </p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("declaration", { required: "You must agree to the declaration" })}
                className="mt-1 w-5 h-5 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
              />
              <span className="text-xs md:text-sm text-gray-700">
                I have read, understood, and agree to the declaration above *
              </span>
            </label>
            {errors.declaration && <p className="text-red-500 text-xs mt-2">{errors.declaration.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-700 text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'} 
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

          <p className="text-center text-xs text-gray-500 mt-6">
            By submitting this application, you agree to our membership terms and conditions
          </p>
        </motion.form>
      </div>
    </div>
  );
}