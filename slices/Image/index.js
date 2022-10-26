import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismicH.isFilled.image(image) && (
        <div className="img-component img-ht-375">
          <PrismicNextImage field={image} layout="responsive" className="img-ht-375" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
