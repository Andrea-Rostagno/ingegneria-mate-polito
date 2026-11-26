---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["standard loss function", "standard normal loss function", "funzione di perdita standard", "aspettativa parziale", "partial expectation", "domanda inevasa attesa", "expected unmet demand", "L(z)"]
tags: [competenza, area/ottimizzazione]
---

# Funzione di perdita normale standard

> L'aspettativa parziale $L(z)=\mathbb E[(Z-z)^+]$ di una normale standard: dà in forma chiusa la domanda inevasa attesa e il profitto atteso del newsvendor con domanda normale.

## Definizione / enunciato
Un'**aspettativa parziale** integra solo su un sottointervallo. La domanda inevasa attesa con disponibilità $S$ è
$$n(S)=\int_S^{+\infty}(x-S)f_D(x)\,dx.$$
Per $Z\sim N(0,1)$ con densità $\varphi(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2}$ la **funzione di perdita standard** è
$$L(z)=\int_z^{+\infty}(x-z)\varphi(x)\,dx .$$

## Formule chiave
$$L(z)=\varphi(z)-z\big(1-\Phi(z)\big),\qquad n(S)=\sigma\,L\Big(\frac{S-\mu}{\sigma}\Big)\ \text{ per }D\sim N(\mu,\sigma^2).$$
Profitto atteso del newsvendor con domanda normale:
$$\mathbb E[\pi(q,D)]=c_u\mu-c_o(q-\mu)-(c_u+c_o)\,\sigma L\Big(\frac{q-\mu}{\sigma}\Big).$$

## Intuizione
Il primo pezzo di $L$ si integra con $t=x^2/2$, $dt=x\,dx$: $\frac1{\sqrt{2\pi}}\int_z^{\infty}xe^{-x^2/2}dx=\varphi(z)$; il secondo è $z$ per la coda $1-\Phi(z)$. Per una normale generica basta standardizzare ($t=(x-\mu)/\sigma$, $dx=\sigma\,dt$). Il profitto atteso è il "profitto ideale" $c_u\mu$ meno il costo atteso dello scostamento tra $q$ e $D$.

## Come si usa
Nel newsvendor si calcola prima $q^*$ dal quantile $F_D(q^*)=c_u/(c_u+c_o)$, poi si valuta il profitto atteso con la formula sopra (la domanda normale ha supporto fino a $-\infty$, per questo si aggiunge e toglie $c_o\int_q^{\infty}(q-x)f_D\,dx$ per ottenere un integrale su tutto il supporto). La stessa $n(S)$ serve per il livello di servizio nella gestione scorte.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): sezione "Partial expectation and loss function" e "Additional remarks for newsvendor". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 12-15).

## Prerequisiti
- [[Distribuzione normale]]: densità $\varphi$ e ripartizione $\Phi$
- [[Problema del newsvendor]]: il profitto atteso da esprimere in forma chiusa

## Collegati
- [[Valore atteso]]: aspettativa parziale come integrale troncato
- [[Pricing di opzioni con Monte Carlo]]: il payoff atteso di una call $\mathbb E[(S_T-K)^+]$ è un'aspettativa parziale dello stesso tipo di $n(S)$
