import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails";
import {
  useCreatePaymentIntentMutation,
} from "@/redux/features/orders/ordersApi";
import { loadStripe } from "@stripe/stripe-js";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();
  const { data: userData } = useLoadUserQuery(undefined, {});
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
   
    if (data && userData?.user) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIntent(amount);
    }
  }, [ data, userData]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading
            title={data?.course?.name + " - FinesseFleet"}
            description={
              "Discover the power of personalized guidance at FinesseFleet! We firmly believe in unlocking the unique potential within every student. Tailored to individual preferences, our guidance ensures students can excel confidently in their chosen fields. Join us on the journey to academic excellence!"
            }
            keywords={data?.course?.tags}
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
            <CourseDetails
              data={data?.course}
              setRoute={setRoute}
              setOpen={setOpen}
            />
          <Footer />
        </>
      )}
    </>
  );
};

export default CourseDetailsPage;
