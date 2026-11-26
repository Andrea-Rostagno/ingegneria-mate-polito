---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["piecewise linear functions", "funzione lineare a tratti", "breakpoint", "sconti all-unit", "sconti incrementali", "quantity discounts"]
tags: [competenza, area/ottimizzazione]
---

# Funzioni lineari a tratti

> Rappresentazione di costi non lineari (economie o diseconomie di scala, sconti) con funzioni lineari a tratti: il caso convesso si linearizza con variabili continue, quello non convesso richiede variabili binarie.

## Definizione / enunciato
Con breakpoint $x^{(1)},x^{(2)},x^{(3)}$ e pendenze $c_1,\dots,c_4$ (funzione continua per l'origine), per esempio
$$f(x)=c_1x^{(1)}+c_2\big(x^{(2)}-x^{(1)}\big)+c_3\big(x-x^{(2)}\big)\quad\text{per }x^{(2)}\le x\le x^{(3)} .$$
Pendenze crescenti ($c_1<c_2<c_3<c_4$, costi marginali crescenti): $f$ convessa; decrescenti: concava; arbitrarie: né l'una né l'altra.

## Formule chiave
**Caso convesso** (minimizzazione): $x=z_1+z_2+z_3+z_4$, $0\le z_1\le x^{(1)}$, $0\le z_2\le x^{(2)}-x^{(1)}$, $0\le z_3\le x^{(3)}-x^{(2)}$, $z_4\ge0$, $f(x)=\sum_kc_kz_k$.

**Caso generale** (nodi $(x^{(i)},y^{(i)})$, $i=0,\dots,3$, binarie $\delta_i$ per l'intervallo $[x^{(i-1)},x^{(i)}]$):
$$x=\sum_{i=0}^3\lambda_ix^{(i)},\ \ y=\sum_{i=0}^3\lambda_iy^{(i)},\ \ \sum_i\lambda_i=1,\ \lambda_i\ge0;$$
$$\lambda_0\le\delta_1,\ \lambda_1\le\delta_1+\delta_2,\ \lambda_2\le\delta_2+\delta_3,\ \lambda_3\le\delta_3,\ \ \sum_{i=1}^3\delta_i=1,\ \delta_i\in\{0,1\}.$$

## Intuizione
Nel caso convesso il solver attiva i segmenti nell'ordine giusto: non conviene usare $z_2$, più costosa, finché $z_1$ non è saturata. Nel caso concavo ($c_2<c_1$) il solver attiverebbe $z_2$ per prima, cioè otterrebbe lo sconto senza raggiungere la soglia. Le sole combinazioni convesse dei nodi descrivono la ricopertura convessa dei punti (poliedro grigio): le binarie obbligano a combinare solo nodi adiacenti, scambiando una non convessità con un'altra.

## Come si usa
Esempi: costo di trasporto non lineare nel volume, sconti sulla quantità, costi di transazione dipendenti dalla liquidità. Sconto **all-unit**: oltre la soglia $q$ il prezzo ridotto vale per tutte le unità; **incrementale**: solo per la quota eccedente $q$ (funzione concava, serve la formulazione con binarie). Il valore assoluto $|e|$ è il caso convesso più semplice.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 13-18).

## Prerequisiti
- [[Funzione convessa]]: decide quale formulazione serve
- [[Combinazioni coniche, affini e convesse]]: ogni segmento è una combinazione convessa di nodi

## Porta a
- [[Linearizzazione di valore assoluto e min-max]]: $|e|$ come caso convesso

## Collegati
- [[Struttura dei costi]]: economie e diseconomie di scala
- [[Vincoli logici con variabili binarie]]: un solo intervallo attivo
- [[Insieme convesso]]: le sole combinazioni convesse danno la ricopertura convessa
