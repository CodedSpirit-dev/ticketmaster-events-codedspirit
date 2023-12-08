import { useForm } from "react-hook-form";

/**
 * Componente para el formulario de registro.
 * @returns {JSX.Element} JSX del formulario de registro
 */
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(); // Hook para manejar el formulario

  /**
   * Maneja el click del botón "Clear".
   */
  const handleClearClick = () => {
    reset(); // Limpia los campos del formulario
  };

  /**
   * Maneja el submit del formulario.
   * @param {Object} data Objeto con los datos del formulario
   */
  const handleSubmitForm = (data) => {
    console.log(data); // Imprime los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Nombre
        <input {...register("name", { required: true })} />
        {errors.name && <span>El nombre es obligatorio</span>}
      </label>
      <label>
        Edad
        <input {...register("age", { required: true })} />
        {errors.age && <span>La edad es obligatoria</span>}
      </label>
      <label>
        Dirección
        <input {...register("address", { required: true })} />
        {errors.address && <span>La dirección es obligatoria</span>}
      </label>
      <label>
        Código Postal
        <input {...register("zipcode", { required: true })} />
        {errors.zipcode && <span>El código postal es obligatorio</span>}
      </label>
      <label>
        Teléfono
        <input {...register("phone", { required: true })} />
        {errors.phone && <span>El teléfono es obligatorio</span>}
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Limpiar
        </button>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default SignupForm;
