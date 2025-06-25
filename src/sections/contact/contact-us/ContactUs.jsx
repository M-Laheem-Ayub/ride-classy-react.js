import React from "react";

const ContactUs = () => {
  return (
    <div>
      <form action="https://fabform.io/f/xxxxx" method="post">
        <section class="">
          <div class="w-full mx-auto pb-16 px-4 sm:px-6 lg:pb-20 lg:px-12">
            <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <a
                href="mailto:contact@rideclassy.com"
                className="text-2xl sm:text-[29px] mt-4 md:mt-0 font-robotoSlab text-[#EFA765] block "
              >
                +34 933 93 93 67
              </a>
              <a
                href="tel:+34933939367"
                className="text-2xl sm:text-[29px]  mt-4 font-robotoSlab text-[#EFA765] block "
              >
                contact@rideclassy.com
              </a>
              <span
                href="tel:+34933939367"
                className="text-xl md:text-3xl mt-4 font-playfair font-semibold text-[#EFA765] block "
              >
                Address
              </span>
              <p className="text-[14.6px] md:text-base text-[#575757] mt-2">
                Av. del Paralelo 111, 08004, Barcelona Spain
              </p>
            </div>
            <div class="mt-16 lg:mt-32  ">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
                <div className="overflow-hidden pt-2 h-60 sm:h-80  md:h-auto w-auto px-4 sm:px-14 md:px-0 lg:px-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3398.958679127394!2d74.37643807561399!3d31.580180974186497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM0JzQ4LjciTiA3NMKwMjInNDQuNSJF!5e0!3m2!1sen!2s!4v1750502621281!5m2!1sen!2s"
                    width="100%"
                    className="h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
                <div>
                  <div
                    id="contact-us"
                    class="overflow-hidden px-4 sm:px-6 lg:px-10 "
                  >
                    <div class="relative mx-auto max-w-xl">
                      <div class="">
                        <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                          <div class="sm:col-span-2">
                            <label
                              for="name"
                              class="block text-[14.6px] md:text-base font-medium text-[#575757] "
                            >
                              Your name
                            </label>
                            <div class="mt-1">
                              <input
                                name="name"
                                type="text"
                                id="name"
                                autocomplete="organization"
                                required
                                class=" border-none outline-none block w-full rounded-sm  py-3.5 px-4"
                              />
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <label
                              for="email"
                              class="block text-[14.6px] md:text-base font-medium text-[#575757] "
                            >
                              Your email
                            </label>
                            <div class="mt-1">
                              <input
                                name="email"
                                id="email"
                                required
                                type="email"
                                autocomplete="email"
                                class="border-none outline-none block w-full rounded-sm  py-3.5 px-4"
                              />
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <label
                              for="message"
                              class="block text-[14.6px] md:text-base font-medium text-[#575757] "
                            >
                              Your message
                            </label>
                            <div class="mt-1">
                              <textarea
                                required
                                name="message"
                                id="message"
                                rows="10"
                                class="border-none outline-none block w-full rounded-sm  py-3.5 px-4"
                              ></textarea>
                            </div>
                          </div>
                          <div class="flex justify-start sm:col-span-2">
                            <input
                              type="submit"
                              value="SUBMIT"
                              title="Submit"
                              className=" cursor-pointer tracking-widest px-7 py-3 text-[13px] text-center text-[#EFA765] border border-[#EFA765]  hover:bg-[#EFA765] hover:text-white focus:outline-none"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ContactUs;
