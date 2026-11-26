---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["mean and standard deviation", "valutazione statistica dell'errore", "varianza empirica", "devianza", "deviazione standard della media", "errore standard", "scarto quadratico medio"]
tags: [competenza, area/fisica]
---

# Media e deviazione standard delle misure

> Con $n$ misure ripetute la miglior stima è la media aritmetica, la dispersione della singola misura è la deviazione standard e l'incertezza sulla media è la deviazione standard della media.

## Definizione / enunciato
Dato un set di misure $x_1,\dots,x_n$ della stessa grandezza:
- media $\bar x=\frac1n\sum x_i$ (miglior stima del valore vero);
- devianza $\sum(x_i-\bar x)^2$;
- varianza $\frac1n\sum(x_i-\bar x)^2$ e varianza empirica $\frac1{n-1}\sum(x_i-\bar x)^2$ (preferibile per $n$ piccolo);
- deviazione standard (errore standard) = radice della varianza: incertezza media della **singola** misura;
- deviazione standard della media: incertezza su $\bar x$.

## Formule chiave
$$\sigma_x=\sqrt{\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar x)^2},\qquad s_{\langle x\rangle}=\sqrt{\frac{1}{n(n-1)}\sum_{i=1}^n(x_i-\langle x\rangle)^2}$$
Il risultato si scrive $x=x_{best}\pm s_{\langle x\rangle}$.

## Intuizione
La deviazione standard non diminuisce aumentando le misure (descrive lo strumento e il metodo), quella della media sì: aumentare $n$ rende più precisa la stima del valore vero.

## Come si usa
Si usa quando la semidispersione supera l'incertezza strumentale. Esempio di misure ripetute con righello millimetrato (`Statistica_TeoremaLimiteCentrale.pdf` p. 4): $x_i=10.1, 11.8, 11.3, 13.1, 10.3, 10.9, 11.2, 12.3, 13.3, 10.2$, rappresentate con un istogramma a intervalli.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 28/02 e del 27/04/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/LezioneFisica1_Dimensione_ErrorediMisura.pdf` (pp. 20-23); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/Statistica_TeoremaLimiteCentrale.pdf` (pp. 4, 12, 17).

## Prerequisiti
- [[Errori di misura]]: stima statistica dell'errore accidentale

## Porta a
- [[Distribuzione normale degli errori]]: parametri della distribuzione limite
- [[Propagazione degli errori]]: varianze delle grandezze dirette

## Collegati
- Nessuno.
