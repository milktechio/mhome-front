import React, { useEffect, useState } from "react";
import Modal from "@/Components/Modal/Modal";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeCardElement } from "@stripe/stripe-js";
import styles from "./Buy.module.css"; // Importa el archivo de estilos
import { authAxios } from "@/api/config/axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

// Cargar la clave pública de Stripe
const stripePromise = loadStripe(
  "pk_test_51PmqBo2NfQClRKOndE1oySscD9hQxc9XNeGOjLTy4mldx5hQDx1IKa72y9jZd5WkIDeHmyLzzRdCOIrYNmKxZONc00SNwJJXDA"
);

const CheckoutForm: React.FC<{
  close?: CallableFunction;
  variant?: any;
}> = ({ close, variant }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    toast.info("Procesando pago...", { theme: "dark" });

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    const res = await stripe.createToken(
      elements.getElement(CardElement) as StripeCardElement
    );

    if (res.error) {
      return toast.error(res.error.message, { theme: "dark" });
    }

    const { token } = res;

    authAxios
      .post("purchase/save", {
        product_id: id,
        payment: "stripe",
        sold: 1,
        variant_id: variant?.id,
        token: token?.id,
      })
      .then(() => {
        toast.success("Pago procesado correctamente", { theme: "dark" });
        navigate("/user-membership");
        return close && close();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error al procesar el pago", { theme: "dark" });
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <CardElement className={styles.cardElement} />
      <button type="submit" disabled={!stripe} className={styles.submitButton}>
        Pagar
      </button>
    </form>
  );
};

interface ModalNeighborRegisterProps {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
  variants?: any;
}

const ModalNeighborRegister: React.FC<ModalNeighborRegisterProps> = ({
  modal,
  close,
  variants,
}) => {
  const [variant, setVariant] = useState<any>(null);

  useEffect(() => {
    console.log("modal", modal);
    console.log("variants", variants);

    if (variants?.length > 0) {
      const variant = variants.find((el: any) => el.id === modal);
      if (variant) {
        setVariant(variant);
      }
    }
  }, [variants, modal]);

  return (
    <>
      {modal !== "" && (
        <Modal>
          <Modal.Header text="Crea un pago" />
          <Modal.Body>
            <PageContentDist>
              <PageContentDist.Main>
                <div className="w-100">
                  <h3>{variant?.name}</h3>
                  <p>El precio es: {variant?.price}</p>
                  <p>Ingresa los datos de tu tarjeta</p>

                  <Elements stripe={stripePromise}>
                    {variant?.price > 0 && (
                      <CheckoutForm variant={variant} close={close} />
                    )}
                  </Elements>
                </div>
              </PageContentDist.Main>
            </PageContentDist>
          </Modal.Body>
          <Modal.Footer text="Registrar" close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalNeighborRegister;
