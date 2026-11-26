---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["semiconductor junction", "allineamento del livello di Fermi", "Fermi level alignment", "livello di vuoto"]
tags: [competenza, area/fisica]
---

# Giunzione tra semiconduttori

> Quando due semiconduttori con livelli di Fermi diversi vengono messi a contatto diventano un unico sistema: gli elettroni passano dal materiale con $E_F$ più alto a quello con $E_F$ più basso finché i due livelli di Fermi si allineano.

## Definizione / enunciato
Per ogni semiconduttore $i$ il numero totale di elettroni nelle bande è funzione del suo livello di Fermi: $N_i=N_i(E_{Fi})$. Si mettono gli schemi a bande su un asse di energia comune, con lo zero all'energia dell'elettrone libero (livello di vuoto), e si passa dallo schema nello spazio reciproco a quello nello spazio reale (bande in funzione di $x$). Dopo l'unione il livello di Fermi deve essere unico: l'unico modo è un travaso di elettroni da SEMIC2 (con $E_{F2}$ più alto) a SEMIC1.

## Formule chiave
$$N_1=\int_0^\infty g_1(E)f(E,T)dE=\int_0^\infty\frac{g_2(E)}{\left[e^{\frac{E-E_{F1}}{k_BT}}+1\right]}dE$$
(trascritto come nella slide p. 22: il $g_2(E)$ del secondo integrale è probabilmente un refuso per $g_1(E)$)
$$\frac{dN_i}{dE_{Fi}}=\int_0^\infty\frac{g_i(E)}{k_BT\left[e^{\frac{E-E_{Fi}}{k_BT}}+1\right]^2}e^{\frac{E-E_{Fi}}{k_BT}}dE,\qquad dN_i=\text{cost}\cdot dE_{Fi}$$

## Intuizione
$dN_i/dE_{Fi}>0$: aggiungere elettroni a un materiale ne alza il livello di Fermi, toglierne lo abbassa. Il materiale che cede elettroni abbassa $E_F$, quello che li riceve lo alza: il processo si ferma appena i due $E_F$ coincidono, come due vasi comunicanti.

## Come si usa
Schema qualitativo: si disegnano BC, BV ed $E_F$ dei due materiali rispetto al livello di vuoto, si individua quale ha $E_F$ più alto e quindi il verso del travaso, e si disegna lo schema finale con $E_F$ unico e le bande dei due lati sfalsate nello spazio reale (`71&72.LEZIONE.pdf` pp. 24-27). Le slide si fermano all'allineamento: non trattano regione di svuotamento, giunzione p-n né diodo.

## Nei corsi
- **Fisica 2** (triennale): lezioni 71-72, "Allineamento delle bande in giunzioni" (SEMIC1 e SEMIC2). Fonti: `triennale/ANNO 2/fisica 2/lezioni/71&72.LEZIONE.pdf` (pp. 22-27).

## Prerequisiti
- [[Drogaggio dei semiconduttori]]: materiali con livelli di Fermi diversi
- [[Distribuzione di Fermi-Dirac]]: N_i dipende da E_Fi

## Porta a
- Nessuno.

## Collegati
- Nessuno.
