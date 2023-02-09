import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Header from "~/components/header/header"
import Navbar from '~/components/navbar/navbar';

export default component$(() => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Libyan Programmers Association',
  meta: [
    {
      name: 'description',
      content: 'The official site for libyan programmers association',
    },
  ],
};
