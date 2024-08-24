import ButtonPrimary from "@/Components/Buttons/ButtonPrimary/ButtonPrimary";
import Card from "@/Components/Card/Card";
import PagesContentTemplate from "@/Components/PagesContentTemplate/PagesContentTemplate";

const ProfileUser = () => {
  return (
    <PagesContentTemplate>
      <Card>
        <Card.Header title="Titulo" />
        <Card.Body>
          <Card.Input text="nombre" />
          <Card.Input text="telefono" />
          <Card.Input text="email" />
          <Card.Input text="casa" />
        </Card.Body>
        <Card.Footer>
          <Card.Button text="Guardar" />
        </Card.Footer>
      </Card>
      <ButtonPrimary text="Pagos" />
    </PagesContentTemplate>
  );
};

export default ProfileUser;
