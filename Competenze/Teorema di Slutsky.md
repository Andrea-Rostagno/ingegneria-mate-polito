---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Slutsky's theorem", "lemma di Slutsky", "Slutsky", "convergenza in legge di somme e prodotti"]
tags: [competenza, area/probabilita]
---

# Teorema di Slutsky

> Se $X_n\to X$ in legge e $Y_n\to a$ costante, somme, prodotti e quozienti passano al limite: $X_n+Y_n\to X+a$, $X_nY_n\to Xa$, $X_n/Y_n\to X/a$.

## Definizione / enunciato
Se $X_n\xrightarrow{\mathcal L}X$ e $Y_n\xrightarrow{\mathcal L}a$ (equivalentemente $Y_n\xrightarrow{\mathbb P}a$, perché il limite è costante), allora
$$\text{a)}\ X_n+Y_n\xrightarrow{\mathcal L}X+a,\qquad\text{b)}\ X_nY_n\xrightarrow{\mathcal L}aX,\qquad\text{c)}\ \frac{X_n}{Y_n}\xrightarrow{\mathcal L}\frac Xa\ \ (\text{quando ben definito}).$$

## Formule chiave
Caso particolare usato spesso: se $a_n\to a$, $b_n\to b$ numeri reali e $X_n\xrightarrow{\mathcal L}X$, allora $a_nX_n+b_n\xrightarrow{\mathcal L}aX+b$.

## Intuizione
In generale la convergenza in legge non passa alle somme (le leggi marginali non dicono nulla sulla congiunta), ma se uno dei due addendi converge a una costante la dipendenza non conta più.

## Come si usa
- **Test sulle proporzioni**: per il TLC $\frac{\bar X-p}{\sqrt{p(1-p)/n}}\xrightarrow{\mathcal L}\mathcal N(0,1)$; poiché $\bar X(1-\bar X)\xrightarrow{\mathbb P}p(1-p)$, per Slutsky anche $\frac{\bar X-p}{\sqrt{\bar X(1-\bar X)/n}}\xrightarrow{\mathcal L}\mathcal N(0,1)$: si può sostituire la varianza con la sua stima.
- **Metodo delta**: da $\sqrt n(X_n-\theta)\xrightarrow{\mathcal L}\mathcal N(0,\sigma^2)$ e $\frac1{\sqrt n}\to0$ si ottiene $X_n\xrightarrow{\mathcal L}\theta$, quindi $X_n\xrightarrow{\mathbb P}\theta$; poi $\sqrt n(g(X_n)-g(\theta))=\sqrt n(X_n-\theta)[g'(\theta)+w(X_n-\theta)]$ con $w(X_n-\theta)\xrightarrow{\mathbb P}0$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 18 ("proprietà della convergenza in legge"), usato nella lezione 19 e nelle slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione18(16-11-2023).pdf` (p. 2); `2023Lezione19(17-11-2023).pdf` (pp. 2-3); `statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Costruzione del test XII).

## Prerequisiti
- [[Convergenza in legge]]: ipotesi su $X_n$
- [[Convergenza in probabilità]]: $Y_n\xrightarrow{\mathbb P}a$

## Porta a
- [[Metodo delta]]: passo finale della dimostrazione
- [[Test sulle proporzioni]]: varianza sostituita dalla stima
