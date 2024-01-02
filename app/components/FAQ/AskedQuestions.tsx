import React, {Fragment} from 'react';
import {faqs} from "@/utils/faqs";
import QuestionCard from "@/app/components/FAQ/QustionCard/QuestionCard";
import styles from "./styles.module.scss";

const AskedQuestions = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.intro}>
        <h2>Frequently Asked Questions</h2>
        <p>Still you have any questions? Contact our Team via hello@squareup.com</p>
      </div>

      <div className={styles.list}>
        {faqs.map((item,  index)=>
        <Fragment key={item.id}>
          <QuestionCard question={item.question} number={index+1} answer={item.answer}/>
        </Fragment>
        )}
      </div>
    </section>
  );
};

export default AskedQuestions;