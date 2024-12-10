import { Container } from './styles';

export function Input({ icon: Icon, type = "text", children, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {type === "select" ? (
        <select {...rest}>
          {children}
        </select>
      ) : (
        <input type={type} {...rest} />
      )}
    </Container>
  );
}
