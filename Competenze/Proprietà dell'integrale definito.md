---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["properties of the definite integral", "linearità dell'integrale definito", "monotonia dell'integrale", "additività", "teorema di spezzamento"]
tags: [competenza, area/analisi]
---

# Proprietà dell'integrale definito

> L'integrale è lineare, monotono rispetto all'integranda e additivo rispetto all'intervallo; inoltre $\left|\int f\right|\le\int|f|$.

## Definizione / enunciato
Siano $f,g:[a,b]\to\mathbb R$ integrabili (Morandotti, §5.2).
- **Linearità** (teor. 5.2.1): $\int_a^b(\alpha f+\beta g)=\alpha\int_a^bf+\beta\int_a^bg$ per $\alpha,\beta\in\mathbb R$.
- **Monotonia / confronto** (teor. 5.2.2): $f\le g\Rightarrow\int_a^bf\le\int_a^bg$.
- **Valore assoluto** (cor. 5.2.3): $\left|\int_a^bf\right|\le\int_a^b|f|$.
- **Additività / spezzamento** (teor. 5.2.11): per $c\in(a,b)$, $\int_a^bf=\int_a^cf+\int_c^bf$.
- **Integrale orientato** (def. 5.2.12): $\int_a^af=0$ e $\int_a^bf=-\int_b^af$ se $a>b$; con questa convenzione l'additività vale per tre punti qualunque (anche Lussardi, teor. 4.2.2).

## Formule chiave
$$\left|\int_a^bf(x)\,dx\right|\le\int_a^b|f(x)|\,dx\le M|b-a|,\qquad M=\max_{[a,b]}|f|$$

## Intuizione
Sono le proprietà dell'area con segno: l'area di una somma è la somma delle aree, una funzione più alta ha più area, l'area su un intervallo è la somma delle aree sui pezzi.

## Come si usa
Si spezza l'integrale nei punti in cui cambia l'espressione dell'integranda (funzioni a tratti, valori assoluti: es. 6 dell'esercitazione 20, 2022-23, $\int_0^{2\pi}|\sin x|\,dx$); si stimano integrali con il confronto; il calcolo delle aree tra due grafici (es. 2 e 7 dell'esercitazione 20) usa linearità e additività.

## Nei corsi
- **Analisi 1** (triennale): "proprietà: monotonia, additività e linearità dell'integrale". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.2.1-5.2.2, cor. 5.2.3, teor. 5.2.11, def. 5.2.12, PDF pp. 177-183); `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (def. 4.2.1, teor. 4.2.2, pp. 72-73).

## Prerequisiti
- [[Integrale di Riemann]]: proprietà delle somme

## Porta a
- [[Teorema della media integrale]]: monotonia tra m e M
- [[Funzione integrale]]: additività

## Collegati
- [[Valore assoluto]]: |∫f|≤∫|f|
