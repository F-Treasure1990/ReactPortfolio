import { motion } from "framer-motion";
import React from "react";
import useQuoteAPI from "Hooks/useQuoteAPI";
import Loader from "Components/Loader/Loader";
import { Quote, QuoteContainer } from "./QuoteSectionStyles";
import { useLocation } from "react-router-dom";

const v = {
  a: { opacity: 1 },
  i: { opacity: 0 }
};

const QuoteSection = () => {
  const { data, isSuccess, isLoading, refetch } = useQuoteAPI();
  const pathname = useLocation();

  return (
    <QuoteContainer onClick={() => refetch()} pathName={pathname === "/"}>
      <Quote>
        {isLoading && <Loader />}
        {isSuccess && (
          <>
            <motion.div className="author" variants={v} initial="i" animate="a">
              ~ {data?.author} ~
            </motion.div>
            <motion.div className="quote" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              &quot;{data?.content?.split(".")}&quot;
            </motion.div>
          </>
        )}
      </Quote>
    </QuoteContainer>
  );
};

export default QuoteSection;
