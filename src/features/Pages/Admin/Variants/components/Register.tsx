import { useAppDispatch } from "@/redux/hooks/hooks";
import { useState, useEffect } from "react";
import { postNewVariant } from "@/redux/features/variant/variantSlice";
import Card from "@/Components/Card/Card";
import Modal from "@/Components/Modal/Modal";
import PageContentDist from "@/layouts/PageContentDist/PageContentDist";
import Builder from '@/Components/forms';
import { useParams } from 'react-router-dom';

const ModalNeighborRegister = ({
  modal,
  close,
}: {
  modal?: string;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [fields, setFields] = useState<[]>([]);
  const [data, setData] = useState<any>({});
  const [file, setFile] = useState<any>(null); // Estado para el archivo
  const { id } = useParams();

  useEffect(() => {
    setFields([
      {
        name: 'name',
        label: 'Nombre del plan',
        defaultValue: 'plan mensual',
        required: true,
      },
      {
        name: 'description',
        label: 'Descripción',
        defaultValue: 'plan mensual',
        required: true,
      },
      {
        name: 'content',
        label: 'Contenido',
        defaultValue: 'plan mensual',
        required: true,
      },
      {
        name: 'price',
        label: 'Precio',
        defaultValue: '100',
        required: true,
      },
      {
        name: 'currency',
        label: 'Moneda',
        defaultValue: 'MXN',
        required: true,
      },
      {
        name: 'stock',
        label: 'Stock',
        defaultValue: '20',
        required: true,
      },
      {
        name: 'active',
        label: 'Activo',
        defaultValue: '1',
        required: true,
      },
      {
        name: 'recurring',
        label: 'Recurrencia',
        defaultValue: 'month',
        required: true,
      }
    ]);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]); // Guarda el archivo seleccionado en el estado
    }
  };

  const dispatch = useAppDispatch();

  const onSave = () => {
    const newData = {
      ...data,
      product_id: id,
      image:file // Añade el archivo al objeto de datos
    };
    dispatch(postNewVariant(newData));
  };

  return (
    <>
      {modal === "register" && (
        <Modal>
          <Modal.Header text="Registra una tarifa" />
          <Modal.Body>
            <PageContentDist>
              <PageContentDist.Main>
                <div className="w-100">
                  <Builder fields={fields} onChange={setData} />
                  {/* Input para seleccionar el archivo */}
                  <div className="form-group mt-3">
                    <label htmlFor="fileInput">Seleccionar imagen:</label>
                    <input
                      type="file"
                      id="fileInput"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </PageContentDist.Main>
            </PageContentDist>
          </Modal.Body>
          <Modal.Footer text="Registrar" handler={onSave} close={close} />
        </Modal>
      )}
    </>
  );
};

export default ModalNeighborRegister;
