---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [coherent risk measures, misura di rischio coerente, subadditività, subadditivity, assiomi di Artzner, monotonia, invarianza per traslazioni, omogeneità positiva, non subadditività del VaR]
tags: [competenza, area/finanza]
---

# Misure di rischio coerenti

> Quattro proprietà che una buona misura di rischio dovrebbe avere: il VaR viola la subadditività (penalizza la diversificazione), il CVaR per perdite continue le rispetta tutte.

## Definizione / enunciato
Una misura di rischio $\varrho$ sulle perdite è **coerente** (prop. c21-coerenza) se per ogni $L_1,L_2$:
1. **monotonia**: $L_1\le L_2\Rightarrow\varrho(L_1)\le\varrho(L_2)$;
2. **invarianza per traslazioni**: $\varrho(L+c)=\varrho(L)+c$;
3. **omogeneità positiva**: $\varrho(\lambda L)=\lambda\varrho(L)$, $\lambda\ge0$;
4. **subadditività**: $\varrho(L_1+L_2)\le\varrho(L_1)+\varrho(L_2)$.

Il VaR soddisfa 1-3 ma non 4. Il CVaR, per perdite continue, è coerente; per perdite qualsiasi la versione coerente è la media dei quantili di coda
$$\mathrm{ES}_\alpha(L)=\frac1{1-\alpha}\int_\alpha^1\mathrm{VaR}_u(L)\,du .$$

## Formule chiave
Subadditività = "la diversificazione non aumenta il rischio": il rischio del portafoglio non supera la somma dei rischi delle parti.

## Intuizione
Il VaR guarda solo un quantile e non la coda oltre: due posizioni che singolarmente non superano mai la soglia possono, insieme, superarla con probabilità maggiore di $1-\alpha$. Per perdite discrete anche la formula $\mathbb E[L\mid L\ge\mathrm{VaR}]$ può non essere subadditiva, perché $\mathbb P(L\ge\mathrm{VaR})$ può essere molto maggiore di $1-\alpha$.

## Come si usa
Esempio del libro: due obbligazioni con nominale 100, default indipendenti con probabilità 4%, perdita totale in caso di default. Singolarmente $\mathbb P(L_i>0)=0.04<0.05$, quindi $\mathrm{VaR}_{0.95}(L_i)=0$; per il portafoglio $L\in\{0,100,200\}$ con probabilità $0.9216$, $0.0768$, $0.0016$, quindi $\mathrm{VaR}_{0.95}(L_1+L_2)=100>0=\mathrm{VaR}(L_1)+\mathrm{VaR}(L_2)$: "almeno un default" (7.84%) supera la soglia del 5%. Un gestore guidato solo dal VaR sarebbe spinto a concentrare. Con la media dei quantili di coda: $\mathrm{ES}_{0.95}(L_i)=80$ e $\mathrm{ES}_{0.95}(L_1+L_2)=103.2\le160$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 21 §Conditional VaR, prop. c21-coerenza (enunciato), es. c21-non-subadditivo. Fonti: `Libri/Financial engineering/capitoli/cap21.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/40 - 28 aprile a - Lezione Risk measures VaR1.pdf`.

## Prerequisiti
- [[Value at Risk]]: misura che viola la subadditività
- [[Expected Shortfall]]: misura coerente

## Porta a
- [[Portafoglio gaussiano ottimo]]: minimizzazione di una misura di rischio

## Collegati
- [[Rischio e rendimento di un portafoglio]]: diversificazione
