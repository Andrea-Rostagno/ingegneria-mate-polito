---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Itô process, Ito process, processo di Ito, differenziale stocastico, stochastic differential, regole di moltiplicazione dei differenziali, integrale rispetto a un processo di Itô, drift e diffusione]
tags: [competenza, area/probabilita]
---

# Processo di Itô

> Processo della forma $dX_t=b_t\,dt+\sigma_t\,dW_t$: un integrale ordinario (drift) più un integrale di Itô (diffusione); classe chiusa rispetto alla formula di Itô.

## Definizione / enunciato
$X$ a traiettorie continue è un **processo di Itô** se esistono $b\in M^1_{\mathrm{loc}}$ e $\sigma\in M^2_{\mathrm{loc}}$ con (def. c13-processo-ito)
$$X_t-X_0=\int_0^tb_s\,ds+\int_0^t\sigma_s\,dW_s,\qquad dX_t=b_t\,dt+\sigma_t\,dW_t ;$$
$b$ è il **drift**, $\sigma$ il **coefficiente di diffusione**. Integrale rispetto a $X$: $\int_0^tY\,dX=\int_0^tYb\,ds+\int_0^tY\sigma\,dW$.

**Regole di moltiplicazione** (prop. c13-regole): su partizioni uniformi $\sum(\Delta t)^2\to0$, $\sum\Delta t\,\Delta W\to0$, $\sum(\Delta W)^2\to t$ (in $L^2$), cioè
$$(dt)^2=0,\qquad dt\,dW_t=0,\qquad(dW_t)^2=dt,$$
e i differenziali di ordine superiore sono nulli. Quindi $(dX_t)^2=\sigma_t^2dt$.

## Formule chiave
Con $b=0$, $X$ è una martingala locale (martingala se $\sigma\in M^2$). Per browniani correlati $dW^{(1)}dW^{(2)}=\rho\,dt$.

## Intuizione
Il drift dà la tendenza "media", la diffusione il rumore. In generale $(dX_t)^2\ne dt$: per il GBM $(dS)^2=\sigma^2S^2dt$, per il CIR $(dX)^2=\sigma^2X\,dt$; dimenticarlo è un errore frequente. La varianza infinitesimale di un processo di Itô a coefficienti continui è $\sigma^2(t,x)$.

## Come si usa
Esempio del libro: per il GBM $dS_t=\mu S_t\,dt+\sigma S_t\,dW_t$ si ha $(dS_t)^2=(\mu S_t\,dt+\sigma S_t\,dW_t)^2=\sigma^2S_t^2dt$ (gli altri prodotti sono nulli), il termine che entra in $d\ln S_t$. Analogamente $X_t=e^{W_t}$ ha $(dX_t)^2=X_t^2dt$. D'Onofrio scrive $dX_t=\psi_t\,dt+\varphi_t\,dB_t$, il riassunto $\mu_t,\sigma_t$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 13 §§Le regole di moltiplicazione, Processi di Itô. Fonti: `Libri/Financial engineering/capitoli/cap13.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 04 - analisi stocastica - 8 mag 26.pdf`, `Lezione 05 - analisi stocastica - 12 mag 26.pdf`.

## Prerequisiti
- [[Integrale di Itô]]: parte di diffusione
- [[Variazione quadratica del moto browniano]]: $(dW)^2=dt$

## Porta a
- [[Formula di Itô]]: differenziale di $f(t,X_t)$
- [[Equazione differenziale stocastica]]: coefficienti funzioni di $X_t$

## Collegati
- [[Martingala locale]]: drift nullo
- [[Momenti infinitesimali]]: $A_1=b$, $A_2=\sigma^2$
- [[Moto browniano con drift]]: caso a coefficienti costanti
