import React from "react";

const Cards = () => {
  const cardData = [
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
    {
      title: "Email Marketing Software",
      description:
        "Unlock the power of email marketing with HubSpot's Email Marketing Software...",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      certification: "Certification Course",
    },
  ];

  return (
    <>
      <div className="sc-gPEVay ejqFgl mt-32">
        <div className="sc-iRbamj chKZTL">
          <ul className="sc-cMljjf fGnogu">
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/marketing"
              >
                Marketing
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/sales"
              >
                Sales
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/service"
              >
                Service
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/tutorials"
              >
                Tutorials
              </a>
            </li>
          </ul>
          <ol className="sc-brqgnp grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <li
                key={index}
                className="sc-bZQynM sc-jWBwVP aWZOv false academy-home-popular-courses-card"
                data-testid="card"
              >
                <div className="sc-htpNat sc-EHOje kaJDqL" />
                <div className="sc-htpNat sc-ifAKCX cQJfZM" />
                <div className="sc-htpNat sc-bxivhb ghjSUJ" />
                <div
                  data-testid="card-content"
                  className="sc-kpOJdX eyREDJ academy-card"
                  color="#7c98b6"
                >
                  <img
                    data-src={card.imgSrc}
                    alt=""
                    className="sc-eNQAEJ cixcWR hsg-deferred entered hsg-deferred-loaded"
                    data-ll-status="loaded"
                    src={card.imgSrc}
                  />
                  <div className="sc-kGXeez kEMtLg">
                    <div className="sc-eHgmQL gTTOiB" />
                    <h3 className="sc-ckVGcZ hAcjWA">{card.title}</h3>
                    <div className="sc-htoDjs sc-jKJlTe etrvzF" />
                  </div>
                  <div className="sc-dnqmqq sc-dxgOiQ hTNYGY">
                    <div>
                      <div
                        aria-hidden="true"
                        className="sc-cSHVUG lnNZoB"
                      ></div>
                      <div className="sc-hSdWYo gVtggX">
                        {card.certification}
                      </div>
                      <div className="sc-hMqMXs Jdrki">
                        <span className="sc-kEYyzF etYVtk">
                          {card.description}
                        </span>
                        <span className="sc-kkGfuU kwuNfN">
                          <a href={card.link} rel="noopener noreferrer">
                            Read more
                          </a>
                        </span>
                      </div>
                    </div>
                    <a
                      data-testid="start-cta"
                      aria-label={`Start certification: ${card.title}`}
                      className="sc-chPdSV bWHnSN academy-home-popular-courses-position1 academy-start-cert cta--tertiary sc-kgoBCf fZwKOh"
                      href={card.ctaLink}
                      rel="noopener noreferrer"
                    >
                      Start certification
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Cards;
