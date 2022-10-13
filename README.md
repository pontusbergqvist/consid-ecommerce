## Tid

- Översikt/inlärning DatoCMS + planering - 1h
- Sidor och undersidor med data från DatoCMS - 3h
- Implementering av kundkorg med useContext/useReducer för state - 4h

Totalt: 8h

## Kommentarer

Jag valde att använda DatoCMS med er template som mitt CMS. Har inte jobbat med DatoCMS tidigare, så en del av tiden fick gå till att läsa dokumentationen för att bekanta mig mer med ekosystemet som DatoCMS erbjuder, som hur man hanterar bilder, formatering av rich-text mm. För att använda DatoCMS Content Delivery API så använde jag [graphql-request](https://github.com/prisma-labs/graphql-request) som GraphQL klient.

För att sätta stilregler för mina sidor så har jag använt mig av TailwindCSS, mest för att det är det bibliotek jag är mest bekant med sedan tidigare. För att hantera rich-text (eller Structured Text-fält) så har jag bara satt stilregler i mitt globala stylesheet för de element som renderas från DatoCMS StructuredText-komponent. Bilderna använder DatoCMS Image-komponent.

När jag skulle implementera varukorgen så valde jag att använda useContext tillsammans med useReducer för att hantera state för varukorgen. I uppgiften så föreslår ni Redux, men har inte arbetat med Redux innan så tänkte att för tidens skull så håller jag mig här till något jag är iallfall någorlunda bekant med.
