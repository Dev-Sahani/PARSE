"use server";

import { promises as fs } from "fs";
import path from "path";

export const uploadFile = async (formData: FormData) => {
  try {
    const file = formData.get("file") as File;
    const filename = formData.get("filename") as string;

    const uploadDir = path.join(process.cwd(), "upload");
    const filePath = path.join(uploadDir, filename);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    try {
      await fs.writeFile(filePath, buffer);
      console.log(`File saved to ${filePath}`);
    } catch (error) {
      console.error("Error saving file", error);
      throw new Error("Cannot save the pdf.");
    }

    // const response = await fetch("http://localhost:5001/upload", {
    //   method: "POST",
    //   body: formData,
    // });
    const response = await sleep(100);
    if (response.ok) {
      // const data = await response.json();

      const data = {
        extracted_text: `BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY GOOD DAY TASTE THE GOODNESS India's renowned cookie, Britannia Good Day has been a popular favorite since 1986. These crunchy, buttery cookies are abundantly loaded with delectable ingredients - from cashews, almonds and pistachios to chocolatey delights. Make every day special with the wholesome Britannia Good Day cookies! Good Good Day <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY EXPLORE THE RANGES BRITANNIA Good Day MANY SMILES MAKI A GOOD DAY! BUTTER COOKIES [X] BRITANNIA Good DalyÂ® Good 13 EXTRA MANY SMILES MAKE A GOOD DAY! D GOO CASHEW COOKIES BRITANNIA Good Â® Day NOW soooÂºl chocolaty. CHOCOCHIP COOKIES 40g+ 10g EXTRA" - 50g BISCUITS NET WEIGHT Goog ÄO P Day Oozing with butter in every delicious crunch, this melt-in-your-mouth delight is irresistible. Make tea time complete with the buttery indulgence of mouth- watering Good Day Butter Cookies. Crunch, munch and a bunch of smiles, this snack is loaded with lip-smacking happiness in every bite! PRODUCT HIGHLIGHTS 100% VEGETARIAN NO TRANS-FAT ENRICHED WITH BUTTER SHOP ONLINE b BIG BASKET blinkit BLINKIT Good Day Cashew Cookies are filled with goodness in every crunchy bite. Rich butter meets crisp cashew to make this perfect combination of joy and nutrition. Make everyday moments even more special with this wholesome, tasty . Share the love, share the smiles. PRODUCT HIGHLIGHTS 100% VEGETARIAN NO CHOLESTEROL LOADED WITH NUTS SHOP ONLINE b) BIG BASKET blinkit BLINKIT f FLIPKART Loaded with choco chips, these crunchy, chocolatey bites of delight are sure to fulfil your chocolate cravings. A chocoholic's dream come true, this delectable treat has an abundance of choco chips in every bite. The ultimate chocolate indulgence, Good Day Chocochip Cookies - spreading happiness one choco-chip at a time. PRODUCT HIGHLIGHTS LOADED WITH CHOCOCHIPS 100% VEGETARIAN ZERO TRANSFAT SHOP ONLINE b BIG BASKET f FLIPKART blinkit BLINKIT <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY BRITANNIA Good DalyÂ® PISTA BADAM COOKIES BRITANNIA Good Day A GOOD DAY! CASHEW ALMOND COOKIES TERO Trans Fat Cookies BRITANNIA Good DalÂ® ChUnkiesÂ® Chocolate chip cookies MARY SMILES MAKE A GOOD DAY! 41% EXTRA MANY SMILES MAKE [X] . Nutty wholesomeness with the goodness of almonds and smooth and delightful pistachios, these crunchy cookies make for a nutritious, flavoursome experience. Make teatime nutritious, make teatime tasty with the delightful Good Day Pista Badam Cookies. Grab a cookie, take a bite and savour the happiness! PRODUCT HIGHLIGHTS 100% VEGETARIAN NO TRANS-FAT ENRICHED WITH BUTTER SHOP ONLINE b) BIG BASKET f FLIPKART blinkit BLINKIT Crunchy cookies with nutty abundance! The perfect snack for all occasions - every bite is a scrumptious, melt-in-your-mouth experience with oh-so-perfect nuttiness. Good Day Cashew Almond Cookies - filled with goodness, loaded with happiness! PRODUCT HIGHLIGHTS 100% VEGETARIAN NO CHOLESTEROL LOADED WITH NUTS SHOP ONLINE blinkit BLINKIT UUUU UMI UNUIINICO Crunchy, chunky and all things delicious, Good Day Chunkies has an overload of chocolate chips. These cookies offer an indulgent chocolate experience in every bite! Loaded with dark as well as milk chocolate chips, these cookies simply melt in your mouth. Taken a chunky bite, yet? PRODUCT HIGHLIGHTS 100% VEGETARIAN NO TRANS-FAT LOADED WITH CHOCOCHIPS SHOP ONLINE b BIG BASKET blinkit BLINKIT <<<  <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY Price Summary Product Quantity M.R.P. min price Good Day Butter 100g â¹ 25 â¹ 22 Good Day Cashew 100g â¹ 30 â¹ 27.00 Good Day Chocochips 100g â¹ 30 â¹ 27 Good Day Pista 100g â¹ 30 â¹ 27.00 Good Day Cashew Almond 100g â¹ 30 â¹ 27.00 Good Day Butter 500g â¹ 45 â¹ 40 Good Day Cashew 500g â¹ 50 â¹ 45.00 Good Day Chocochips 500g â¹ 50 â¹ 45 Good Day Pista 500g â¹ 50 â¹ 45.00 Good Day Cashew Almond 500g â¹ 50 â¹ 45.00 Good Day chocolate cookies 500g â¹ 100.00 â¹ 90.00 Good Day Butter 1kg â¹ 100 â¹ 90 Good Day Cashew 1kg â¹ 120 â¹ 100.00 Good Day Chocochips 1kg â¹ 120 â¹ 110 Good Day Pista 1kg â¹ 120 â¹ 110.00 Good Day Cashew Almond 1kg â¹ 120 â¹ 110.00 Good Day chocolate cookies 1kg â¹ 150.00 â¹ 135.00 Seasonal Informations The Good day biscuits are most loved biscuit ranges in India thus they are mostly sold in the festival seasons like September and October (for Diwali and Raksha- Bandhan) Other than that its one of the best snack with tea. These also have good sales on National Holidays like Independence day and Republic Days. <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY Sales Summary Month Units Sold Selling Price (F) Revenue (â¹) January 8,500 24 2,04,000 February 8,200 24 1,96,800 March 9,000 23 2,07,000 April 7,800 23 1,79,400 May 8,100 22 1,78,200 June 8,900 23 2,04,700 July 9,000 24 2,20,800 August 9,500 24 2,28,000 September 9,600 23 2,00,100 October 9,700 24 2,23,200 November 9,000 25 2,27,500 December 8,700 25 2,35,000 Customer Reviews Average Rating Total Number of Reviews 15000 0.6 4.3/5 Rating Standard Deviation 5 * Delicious! These biscuits have been a family favorite for years. The perfect blend of sweetness and crunch. Can't go a day without them Dinesh Babu [X] 4.7* Good, but can be less sweet These biscuits are okay, but I find them a bit too sweet for my tast I prefer something a bit less sugary. Tooba Khan [X] <<< `,
        // extracted_text: `BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY GOOD DAY TASTE THE GOODNESS India's renowned cookie, Britannia Good Day has been a popular favorite since 1986. These crunchy, buttery cookies are abundantly loaded with delectable ingredients - from cashews, almonds and pistachios to chocolatey delights. Make every day special with the wholesome Britannia Good Day cookies! Good Good Day <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY EXPLORE THE RANGES BRITANNIA Good Day MANY SMILES MAKI A GOOD DAY! BUTTER COOKIES [X] BRITANNIA Good DalyÂ® Good 13 EXTRA MANY SMILES MAKE A GOOD DAY! D GOO CASHEW COOKIES BRITANNIA Good Â® Day NOW soooÂºl chocolaty. CHOCOCHIP COOKIES 40g+ 10g EXTRA" - 50g BISCUITS NET WEIGHT Goog ÄO P Day Oozing with butter in every delicious crunch, this melt-in-your-mouth delight is irresistible. Make tea time complete with the buttery indulgence of mouth- watering Good Day Butter Cookies. Crunch, munch and a bunch of smiles, this snack is loaded with lip-smacking happiness in every bite! PRODUCT HIGHLIGHTS 100% VEGETARIAN NO TRANS-FAT ENRICHED WITH BUTTER SHOP ONLINE b BIG BASKET blinkit BLINKIT Good Day Cashew Cookies are filled with goodness in every crunchy bite. Rich butter meets crisp cashew to make this perfect combination of joy and nutrition. Make everyday moments even more special with this wholesome, tasty . Share the love, share the smiles. PRODUCT HIGHLIGHTS 100% VEGETARIAN NO CHOLESTEROL LOADED WITH NUTS SHOP ONLINE b) BIG BASKET blinkit BLINKIT f FLIPKART Loaded with choco chips, these crunchy, chocolatey bites of delight are sure to fulfil your chocolate cravings. A chocoholic's dream come true, this delectable treat has an abundance of choco chips in every bite. The ultimate chocolate indulgence, Good Day Chocochip Cookies - spreading happiness one choco-chip at a time. PRODUCT HIGHLIGHTS LOADED WITH CHOCOCHIPS 100% VEGETARIAN ZERO TRANSFAT SHOP ONLINE b BIG BASKET f FLIPKART blinkit BLINKIT <<<  BRITANNIA WE ARE A RESPONSIBLE GLOBAL TOTAL FOODS COMPANY BRITANNIA Good DalyÂ® PISTA BADAM COOKIES BRITANNIA Good Day A GOOD DAY! CASHEW ALMOND COOKIES TERO Trans Fat Cookies BRITANNIA Good DalÂ® ChUnkiesÂ® Chocolate chip cookies MARY SMILES MAKE A GOOD DAY! 41% EXTRA MANY SMILES MAKE [X] . Nutty wholesomeness with the goodness of almonds and smooth and delightful pistachios, these crunchy cookies make for a nutritious, flavoursome experience. Make teatime nutritious, make teatime tasty with the delightful Good Day Pista Badam Cookies. Grab a cookie, take a bite and savour the happiness! PRODUCT HIGHLIGHTS 100% VEGETARIAN NO TRANS-FAT ENRICHED WITH BUTTER SHOP ONLINE b) BIG BASKET f FLIPKART blinkit BLINKIT Crunchy cookies with nutty abundance! The perfect snack for all occasions - every bite is a scrumptious, melt-in-your-mouth experience with cusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quoscusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quoscusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quoscusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quoscusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quos cusandae fuga corrupti accusantium officiis tenetur veniam. Dolorem delectus unde odit culpa minima porro ipsam ea. Rerum error explicabo quam officia sint excepturi suscipit expedita quos, illum eum optio quod corporis, cumque eligendi. Aut, repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio doloribus harum officiis, placeat nostrum velit delectus nam laudantium ipsam sit perferendis a esse omnis? Molestiae similique quae officia non corporis voluptates animi, qui odio quod eius? Similique veritatis nobis unde ea molestias in laudantium nulla rerum fuga? Dolore voluptates rem incidunt a adipisci, dolores aspernatur optio animi consectetur impedit, provident odio cupiditate tenetur quas pariatur dolorum eaque non! Vero atque molestias corporis, maxime quod voluptatum voluptas harum magnam non explicabo nulla dolores quos natus in inventore amet! Laboriosam obcaecati quasi, quaerat modi in iste at asperiores velit illum reiciendis omnis veritatis? Nostrum aliquid maiores eveniet maxime omnis, non optio. Fugiat, dolore eum. Saepe, dolores magni ratione repudiandae vitae, perferendis assumenda velit perspiciatis veritatis soluta numquam autem cum expedita dolorum qui corporis cupiditate veniam. Consectetur suscipit quibusdam minima nobis officia distinctio! Error, corrupti. Iusto totam dolorum in et. Ipsam neque asperiores aliquam. Dolores labore at corrupti eos debitis quisquam odio? Facere labore id vel autem, provident omnis animi harum alias excepturi aut consequuntur necessitatibus tempore vero iure et aperiam iusto est. Sit, illo voluptate reprehenderit iusto atque vitae minus! Illo, autem cum tempora consectetur neque aliquam, dolor fuga quod hic repellat placeat cumque? Necessitatibus, quasi! Repudiandae perferendis quibusdam fugiat?`,
        message: "temporary data",
      };

      const final_data = await getData(data.extracted_text);
      return final_data;
    } else {
      console.error("Error uploading file:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
};

async function getData(extracted_text: string) {
  try {
    // const response = await fetch("http://localhost:5000/process", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ data: extracted_text }),
    // });

    // if (!response.ok) {
    //   console.log("response not okay");
    //   return { data: null, completeness_percentage: 0 };
    // }

    // const res = (await response.json()).result as string;
    const res = `[TextBlock(text='{"Product Name": "Good Day Biscuits", "Category": "Home & Kitchen", "Sub_category": "Cookware", "Price": 30, "Rating": 4.3, "No_rating": 15000, "Discount": 10, "M_Spend": 1000, "Supply_Chain_E": 90.0, "Sales_y": 106000, "Sales_m": 8833, "Market_T": 2.5, "Seasonality_T": 5.0}\n\nCompleteness percentage: 100%', type='text')]`;
    // "[TextBlock(text='Not complete\nCompleteness percentage: 0%', type='text')]"

    const completePercentage = Number(
      res.substring(
        res.lastIndexOf("Completeness percentage: ") +
          "Completeness percentage: ".length,
        res.lastIndexOf("%")
      )
    );

    let data = null;
    console.log(res);
    console.log(completePercentage);
    if (completePercentage >= 80)
      data = JSON.parse(
        res.substring(res.indexOf("{"), res.lastIndexOf("}") + 1)
      ) as object;

    return {
      data: data,
      completeness_percentage: completePercentage,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}

function sleep(time = 3000): Promise<Response> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(new Response(null, { status: 200 })), time)
  );
}
