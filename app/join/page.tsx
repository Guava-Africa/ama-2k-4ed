'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
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
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const questions = [
    "Do you want to participate actively in the organisation?",
    "Are you willing to abide to the constitution of Ama2k4ED?",
    "Are you a member of any other affiliate?",
    "Are you a first time voter?",
    "Do you accept ZANU PF as your political home?",
    "Do you hold any position of any organisation?",
  ];

  const provinces = [
    "Bulawayo","Harare","Manicaland","Mashonaland Central",
    "Mashonaland East","Mashonaland West","Masvingo",
    "Matabeleland North","Matabeleland South","Midlands"
  ];

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 text-black">
      <div className="max-w-5xl mx-auto bg-white border-2 border-black shadow-xl relative overflow-hidden">

        <img
          src="/logo.png"
          alt="watermark"
          className="absolute inset-0 m-auto w-[700px] opacity-[0.08] pointer-events-none"
        />

        <div className="relative z-10 p-8 border-b-2 border-black">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="/logo.png"
              alt="Zimbabwe"
              className="w-30"
            />

            <div className="flex-1 text-center">
              <h1 className="text-3xl font-bold uppercase">
                AMA2K4ED Registration Form
              </h1>

              <p className="italic mt-2">
                Reflection Of A Brighter Future
              </p>

              <p className="text-sm mt-3 max-w-2xl mx-auto">
                Join into a Zimbabwe in which the importance of every young
                Zimbabwean is realized and every young adult is empowered to
                achieve their full potential.
              </p>
            </div>

            <div className="border border-black p-3 w-40">
              <label className="font-bold text-sm">FORM NO.</label>
              <input className="w-full border-b border-black outline-none mt-2" />
            </div>
          </div>
        </div>

        {submitted && (
          <div className="m-6 border border-green-700 bg-green-100 p-4 text-green-700">
            Application submitted successfully.
          </div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 p-8"
        >
          <h2 className="font-bold uppercase border-b border-black pb-2 mb-6">
            Membership Application Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="NAME *" error={errors.firstName?.message}>
              <input {...register('firstName',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="SURNAME *" error={errors.lastName?.message}>
              <input {...register('lastName',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="EMAIL ADDRESS *" error={errors.email?.message}>
              <input {...register('email',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="PHONE NUMBER *" error={errors.phoneNumber?.message}>
              <input {...register('phoneNumber',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="DATE OF BIRTH *" error={errors.dob?.message}>
              <input type="date" {...register('dob',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="NATIONAL IDENTITY *" error={errors.nationalId?.message}>
              <input {...register('nationalId',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="RESIDENTIAL ADDRESS *" error={errors.address?.message}>
              <input {...register('address',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="OCCUPATION *" error={errors.occupation?.message}>
              <input {...register('occupation',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="PROVINCE *" error={errors.province?.message}>
              <select {...register('province',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black">
                <option value="">Select Province</option>
                {provinces.map(p => <option key={p}>{p}</option>)}
              </select>
            </Field>

            <Field label="PLACE OF BIRTH *" error={errors.placeOfBirth?.message}>
              <input {...register('placeOfBirth',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <Field label="CURRENT DISTRICT *" error={errors.currentDistrict?.message}>
              <input {...register('currentDistrict',{required:'Required'})} className="input w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black" />
            </Field>

            <div>
              <label className="font-semibold block mb-2">GENDER *</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2">
                  <input type="radio" value="M" {...register('gender',{required:'Gender is required'})} /> 
                  <span>M</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="F" {...register('gender',{required:'Gender is required'})} /> 
                  <span>F</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
            </div>
          </div>

          <h2 className="font-bold uppercase border-b border-black pb-2 mt-10 mb-4">
            Membership Questions
          </h2>

          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr>
                <th className="border border-black p-2 text-left">Question</th>
                <th className="border border-black p-2">Yes</th>
                <th className="border border-black p-2">No</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, i) => (
                <tr key={i}>
                  <td className="border border-black p-3">{q}</td>
                  <td className="border border-black text-center">
                    <input type="radio" value="yes" {...register(`question${i+1}` as any,{required:'Please answer this question'})} />
                  </td>
                  <td className="border border-black text-center">
                    <input type="radio" value="no" {...register(`question${i+1}` as any,{required:'Please answer this question'})} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border border-black p-5 mt-8">
            <h3 className="font-bold mb-3">Declaration Statement</h3>
            <p className="text-sm leading-relaxed">
              I do solemnly declare that the information I have given in this form
              is the truth and I have accepted to be a full member of the
              AMA2K4ED. Terms and conditions applied.
            </p>

            <label className="flex gap-3 mt-4">
              <input
                type="checkbox"
                {...register('declaration',{required:'You must agree to the declaration'})}
              />
              <span>I agree to the declaration above.</span>
            </label>
            {errors.declaration && <p className="text-red-500 text-xs mt-1">{errors.declaration.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-black text-white py-4 font-bold uppercase hover:bg-gray-800 transition-colors"
          >
            Submit Registration Form
          </button>
        </motion.form>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}