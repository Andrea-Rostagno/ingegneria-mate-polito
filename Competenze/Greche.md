---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Greeks, greche delle opzioni, option Greeks, delta, gamma, theta, vega, rho, greche di Black-Scholes, sensibilità del prezzo di un'opzione, relazione tra le greche]
tags: [competenza, area/finanza]
---

# Greche

> Le derivate parziali del prezzo di un derivato rispetto a prezzo del sottostante, tempo, volatilità e tasso: misurano i rischi e guidano le coperture.

## Definizione / enunciato
Per $\Pi=\Pi(t,S;r,\sigma)$ (def. c17-greche):
$$\Delta=\frac{\partial\Pi}{\partial S},\quad\Gamma=\frac{\partial^2\Pi}{\partial S^2},\quad\Theta=\frac{\partial\Pi}{\partial t},\quad\nu=\frac{\partial\Pi}{\partial\sigma}\ (\text{vega}),\quad\rho=\frac{\partial\Pi}{\partial r}.$$
Sottostante: $\Delta=1$, $\Gamma=\Theta=\nu=\rho=0$; le greche di un portafoglio sono somme pesate (prop. c17-sottostante).

**Black-Scholes** (prop. c17-greche-bs), $\tau=T-t$:
$$\Delta_c=N(d_1),\quad\Gamma=\frac{N'(d_1)}{S\sigma\sqrt\tau},\quad\nu=S\sqrt\tau N'(d_1),\quad\Theta_c=-\frac{SN'(d_1)\sigma}{2\sqrt\tau}-rKe^{-r\tau}N(d_2),\quad\rho_c=K\tau e^{-r\tau}N(d_2);$$
put: $\Delta_p=N(d_1)-1$, stesse $\Gamma$ e $\nu$, $\Theta_p=\Theta_c+rKe^{-r\tau}$, $\rho_p=\rho_c-K\tau e^{-r\tau}$ (anche dalla parità, prop. c17-greche-parita).

## Formule chiave
Identità chiave (lem. c17-identita-d1d2): $SN'(d_1)=Ke^{-r\tau}N'(d_2)$, $\partial d_{1,2}/\partial S=1/(S\sigma\sqrt\tau)$. **Relazione** (cor. c17-relazione-greche): $\Theta+rS\Delta+\frac12\sigma^2S^2\Gamma=r\Pi$ per ogni portafoglio.

## Intuizione
$\Delta$ è la sensibilità al primo ordine (copertura con il sottostante), $\Gamma$ la curvatura (il delta cambia con $S$), $\nu$ il rischio di volatilità. Per un portafoglio delta-neutrale $\Theta+\frac12\sigma^2S^2\Gamma=r\Pi$: theta e gamma hanno segni tendenzialmente opposti, chi è corto di gamma guadagna dal passare del tempo e perde nei giorni agitati. Con la stessa scadenza $\nu/\Gamma=S^2\sigma\tau$.

## Come si usa
Esempio del libro: call ATM con $S=K=50$, $r=5\%$, $\sigma=25\%$, $\tau=0.5$: $d_1=0.2298$, $\Delta=0.5909$, $\Gamma=0.04396$, $\nu=13.737$, $\Theta=-4.705$, $\rho=12.707$. Lettura: +1 euro di $S$ dà circa +0.59; +1 punto di volatilità +0.137; un giorno −0.013; +1 punto di tasso +0.127.

## Nei corsi
- **Financial engineering** (magistrale): cap. 17 §§Le greche, Theta e la relazione tra le greche; la lezione scrive la vega $\nu$. Fonti: `Libri/Financial engineering/capitoli/cap17.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/36 - lez 21 aprile - Black Scholes e Girsanov.pdf`, `39 - 24 aprile c - esercizi delta gamma Black Scholes.pdf`.

## Prerequisiti
- [[Formula di Black-Scholes]]: si derivano le formule chiuse
- [[Derivate parziali]]: definizione delle greche

## Porta a
- [[Delta hedging]]: annullare $\Delta$
- [[Copertura delta-gamma]]: annullare $\Delta$, $\Gamma$ e $\nu$

## Collegati
- [[Equazione di Black-Scholes]]: relazione $\Theta+rS\Delta+\frac12\sigma^2S^2\Gamma=r\Pi$
- [[Parità put-call]]: greche della put da quelle della call
- [[Convessità di un'obbligazione]]: analogo della gamma per i bond
- [[Duration]]: analogo del delta per i bond
