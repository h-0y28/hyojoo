// // src/pages/Contact.tsx
// import React from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";

// const Contact: React.FC = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data: any) => {
//     emailjs
//       .send("your_service_id", "your_template_id", data, "your_user_id")
//       .then(() => {
//         alert("Message sent!");
//         reset();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Failed to send message");
//       });
//   };

//   return (
//     <main className="p-4 mx-10">
//       <h2 className="text-2xl font-bold my-6 ">Contact Me</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <input
//           {...register("name")}
//           placeholder="Your Name"
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           {...register("email")}
//           placeholder="Your Email"
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <textarea
//           {...register("message")}
//           placeholder="Your Message"
//           className="w-full p-2 border border-gray-300 rounded h-32"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Send Message
//         </button>
//       </form>
//     </main>
//   );
// };

// export default Contact;
export default function Contact() {
  return <></>;
}
