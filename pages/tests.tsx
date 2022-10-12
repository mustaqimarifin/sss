import Container from 'components/Container';

export default function Tests({ entries }) {
  return (
    <Container title="Tests">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full px-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Test Page
        </h1>
      </div>
    </Container>
  );
}
