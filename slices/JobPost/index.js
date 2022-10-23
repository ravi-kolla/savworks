import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "../../components/Bounded";

const JobPost = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div>
        <PrismicRichText field={slice.primary.text} />
      </div>
      <hr />
    </Bounded>
  );
};

export default JobPost;
