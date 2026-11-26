---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["pH scale", "potenziale idrogenionico", "pOH", "scala del pH", "calcolo del pH", "pHmetro", "pH meter"]
tags: [competenza, area/fisica]
---

# pH

> Il pH è il logaritmo decimale cambiato di segno della concentrazione degli ioni idronio: scala compatta per misurare l'acidità delle soluzioni acquose.

## Definizione / enunciato
$[\mathrm{H_3O^+}]$ in soluzione acquosa varia per molti ordini di grandezza (da 10 M a $10^{-15}$ M), quindi si usa una scala logaritmica decimale cambiata di segno. Analogamente il pOH. "p" è un operatore: $pK=-\log K$.
In acqua pura pH = pOH = 7; acida pH < 7, basica pH > 7. A 25 °C la somma di pH e pOH è 14.
**Calcolo:** acidi e basi forti sono completamente ionizzati, $[\mathrm{H_3O^+}]$ (o $[\mathrm{OH^-}]$) coincide con la concentrazione; per acidi e basi deboli si ricava $[\mathrm{H_3O^+}]$ dalla legge dell'equilibrio con $K_a$ o $K_b$ (attenzione alle formule semplificate). A concentrazioni molto alte il pH può essere negativo o maggiore di 14, ma andrebbero usate le attività invece delle concentrazioni.

## Formule chiave
$$\mathrm{pH}=-\log_{10}[\mathrm{H_3O^+}],\qquad \mathrm{pOH}=-\log_{10}[\mathrm{OH^-}],\qquad pK_w=\mathrm{pH}+\mathrm{pOH}=14\ (25\ ^\circ\mathrm C)$$

## Intuizione
Un'unità di pH corrisponde a un fattore 10 nella concentrazione di $\mathrm{H_3O^+}$. Il logaritmo trasforma il prodotto costante $K_w$ in una somma costante.

## Come si usa
Acqua pura: $\mathrm{pH}=-\log_{10}10^{-7}=7$ (p. 31). Domanda di p. 36: il pH di HCl $10^{-8}$ M non è 8, perché a quella diluizione conta anche l'autoionizzazione dell'acqua. Il pH si misura con indicatori o con il pHmetro, un elettrodo che sfrutta l'equazione di Nernst (lezione 19, p. 45).

## Nei corsi
- **Chimica** (triennale): Lezione 15. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 15 - Acidi e basi.pdf` (lezione 15, pp. 31-42); `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 19 - Elettrochimica.pdf` (lezione 19, p. 45).

## Prerequisiti
- [[Forza di acidi e basi]]: calcolo per acidi e basi deboli
- [[Prodotto ionico dell'acqua]]: pH + pOH = 14 da Kw
- [[Proprietà di potenze e logaritmi]]: logaritmo decimale cambiato di segno

## Porta a
- [[Titolazione acido-base]]: curva del pH contro il volume
- [[Soluzione tampone]]: il tampone controlla il pH

## Collegati
- [[Prodotto di solubilità]]: i sali di acidi deboli si sciolgono meglio in acido
- [[Equazione di Nernst]]: il pHmetro è un elettrodo
