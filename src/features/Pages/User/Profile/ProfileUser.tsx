import Card from "@/Components/Card/Card";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import { useAppSelector } from "@/redux/hooks/hooks";

const ProfileUser = () => {
  const profile: any = useAppSelector(
    (state) => state.user.dataMyProfile.profile
  );

  return (
    <PageContentDist>
      <PageContentDist.Header>
        <PageContentDist.HeaderTitle title="My Profile" />
      </PageContentDist.Header>
      <PageContentDist.Main>
        <Card>
          <Card.Avatar image="#" />
          <Card.Body>
            <Card.Input placeholderText={profile.name} text="Nombre:" />
            <Card.Input placeholderText={profile.mobile} text="Telefono:" />
            <Card.Input placeholderText={profile.email} text="Email:" />
            <Card.Input
              placeholderText={
                profile.department
                  ? profile.department
                  : "Sin inmueble asignado"
              }
              text="Casa:"
            />
          </Card.Body>
          <Card.Footer>
            <Card.Button text="Guardar" />
          </Card.Footer>
        </Card>
      </PageContentDist.Main>
    </PageContentDist>
  );
};

export default ProfileUser;
