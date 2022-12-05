type Props = {
    text: string,
    linkText: string,
    link: string,
};

export const FooterLinkForm = ({ link, linkText, text }:Props): JSX.Element => {
  return (
    <p className="mt-8 text-xs font-light text-center text-black">
      {" "}
      { text }{" "}
      <a href={ link } className="font-medium text-blue-600 hover:underline">
        { linkText }
      </a>
    </p>
  );
};
