---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Lebesgue integral", "integrale rispetto a una misura", "integrale secondo Lebesgue", "funzione integrabile", "teoria della misura e integrale di Lebesgue", "integrazione rispetto a una misura discreta"]
tags: [competenza, area/analisi]
---

# Integrale di Lebesgue

> L'integrale rispetto a una misura qualsiasi, costruito per funzioni semplici, poi per misurabili non negative (sup) e infine per differenza di parte positiva e negativa: estende l'integrale di Riemann e contiene somme e valori attesi.

## Definizione / enunciato
In $(X,\mathcal A,\mu)$:
1. $\varphi=\sum_{i=1}^na_i\mathbb 1_{A_i}\in\mathcal S^+$: $\int_X\varphi\,d\mu=\sum_{i=1}^na_i\mu(A_i)$ (con $0\cdot\infty=0$; non dipende dalla partizione);
2. $f\ge0$ misurabile: $\int_Xf\,d\mu=\sup\{\int_X\varphi\,d\mu:\varphi\in\mathcal S^+,\ \varphi\le f\}$;
3. $f$ misurabile: $\int_Xf\,d\mu=\int_Xf^+d\mu-\int_Xf^-d\mu$ se almeno uno è finito; $f$ è **integrabile** se entrambi lo sono. $\int_Ef\,d\mu=\int_Xf\mathbb 1_E\,d\mu$.

## Formule chiave
- $\int_E d\mu=\mu(E)$; linearità, monotonia, additività sul dominio; $f$ integrabile $\iff|f|$ integrabile e $\left|\int_Xf\,d\mu\right|\le\int_X|f|\,d\mu$.
- Per $f\ge0$: $f=0$ q.o. $\iff\int_Xf\,d\mu=0$; se $\int f<\infty$ allora $\mu(\{f=+\infty\})=0$. Per $f$ integrabile: $f=0$ q.o. $\iff\int_Af\,d\mu=0$ per ogni $A$.
- Misura discreta: $\int_Xf\,d\mu=\sum_{i\in I}f(x_i)\mu(\{x_i\})$.
- **Teorema (lezione 12).** $f:[a,b]\to\mathbb R$ limitata e Riemann-integrabile $\Rightarrow$ Lebesgue-integrabile e $\int_{[a,b]}f\,dm=\int_a^bf(x)\,dx$; $f$ è Riemann-integrabile $\iff$ è continua $m$-q.o.

## Intuizione
Riemann partiziona il dominio, Lebesgue i valori. Il prezzo è una costruzione più astratta; il guadagno sono i teoremi di passaggio al limite e un'unica teoria per somme, integrali e medie.

## Come si usa
Esempio della lezione 12: $\mathbb 1_{\mathbb Q\cap[0,1]}$ non è Riemann-integrabile ma $\int_{[0,1]}\mathbb 1_{\mathbb Q\cap[0,1]}\,dm=m(\mathbb Q\cap[0,1])=0$. Per gli integrali impropri, $f$ è Lebesgue-integrabile se e solo se $|f|$ è Riemann-integrabile in senso improprio. I conti si fanno con Riemann.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 10-12; fonte manoscritta. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione10(04-05-23) (1).pdf` (lezione 10, pp. 8-11), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione11(11-05-23).pdf` (lezione 11, pp. 2-8), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione12(25-05-23) (1).pdf` (lezione 12, pp. 1-3).

## Prerequisiti
- [[Funzione semplice]]: prima definizione e approssimazione
- [[Spazio di misura]]: integrale rispetto a mu

## Porta a
- [[Teorema di convergenza monotona]]: passaggio al limite sotto integrale
- [[Spazi Lp]]: integrabilità di |f|^p
- [[Teorema di Radon-Nikodym]]: misura definita da una densità
- [[Valore atteso]]: integrale rispetto a P

## Collegati
- [[Integrale di Riemann]]: Riemann-integrabile implica Lebesgue-integrabile
- [[Integrale improprio]]: assoluta integrabilità
- [[Misura di Lebesgue]]: integrale su R
