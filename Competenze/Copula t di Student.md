---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Student t copula", "t copula", "copula t", "copula Student-t", "copula t-Student", "C_t", "copula ellittica a code pesanti"]
tags: [competenza, area/probabilita]
---

# Copula t di Student

> Copula della t di Student bivariata: come la gaussiana ha una correlazione $\rho$, ma i gradi di libertà $\nu$ aggiungono dipendenza negli eventi estremi. Nella tesi è la copula scelta per il DAX.

## Definizione / enunciato
Caso bivariato (tesi §3.4.1; Pellerey, slide 23, con $\nu>2$):
$$C_{\rho,\nu}(u,v)=\int_{-\infty}^{t_\nu^{-1}(u)}\!\!\int_{-\infty}^{t_\nu^{-1}(v)}\frac{1}{2\pi\sqrt{1-\rho^2}}\Big(1+\frac{s^2-2\rho st+t^2}{\nu(1-\rho^2)}\Big)^{-\frac{\nu+2}2}ds\,dt,$$
con $t_\nu^{-1}$ inversa della f.d.r. t univariata a $\nu$ gradi di libertà. La versione della tesi riporta il fattore $\Gamma(\frac{\nu+2}2)/(\Gamma(\frac\nu2)\pi\nu\sqrt{1-\rho^2})$ (l'estrazione del testo è confusa): è lo stesso fattore, perché $\Gamma(\frac{\nu+2}2)=\frac\nu2\Gamma(\frac\nu2)$ e quindi $\Gamma(\frac{\nu+2}2)/(\Gamma(\frac\nu2)\pi\nu)=\frac1{2\pi}$.

## Formule chiave
- Densità (tesi §5.2.2, `formule.ipynb` §2), con $x=t_\nu^{-1}(u)$, $y=t_\nu^{-1}(v)$:
$$c(u,v;\rho,\nu)=\frac{\Gamma(\frac{\nu+2}2)\Gamma(\frac\nu2)^{-1}\Big(1+\frac{x^2+y^2-2\rho xy}{\nu(1-\rho^2)}\Big)^{-\frac{\nu+2}2}}{\sqrt{1-\rho^2}\,\Gamma(\frac{\nu+1}2)^2\Gamma(\frac\nu2)^{-2}\big(1+\frac{x^2}\nu\big)^{-\frac{\nu+1}2}\big(1+\frac{y^2}\nu\big)^{-\frac{\nu+1}2}}.$$
- Tau di Kendall: $\tau=\frac2\pi\arcsin\rho$, come la gaussiana e indipendente da $\nu$; quindi il metodo dei momenti stima solo $\rho$ ($\nu$ = "null" nella tab. 5.11).

## Intuizione
La t multivariata è una normale divisa per un fattore casuale comune $\sqrt{W}$, $W\sim\chi^2_\nu/\nu$: quando $W$ è piccolo tutte le componenti diventano grandi insieme, e questo crea dipendenza nelle code (lettura mia della costruzione usata nel codice). La tesi la preferisce quando "si vogliono modellare dipendenze di coda più elevate".

## Come si usa
- **MLE sul DAX**: $\rho=0.8599$, $\nu=6.3485$, log-verosimiglianza 119436.7486 (tab. 5.7). Nell'ottimizzazione si riparametrizza $\rho=\tanh(p_0)$, $\nu=e^{p_1}+2$ (§5.2.2) oppure si usano i vincoli $\nu\in(2.001,30)$ con L-BFGS-B.
- **MCMC**: con PyMC3 e prior $\nu\sim\mathrm{Gamma}(2,0.1)$ non si è ottenuta una stima (tab. 5.12).
- **Selezione**: con i parametri medi $\rho=0.8603$, $\nu=6.3485$ ha AIC $=-238869.3669$ e BIC $=-238851.8343$, i più bassi: è la copula migliore (tab. 5.15).
- **Simulazione** (`copula-analysis.py`): si genera $Z$ normale bivariata, $W=\chi^2_\nu/\nu$, si pone $Z/\sqrt W$ e si applica la f.d.r. $t_\nu$.

## Nei corsi
- **Prova finale** (triennale): famiglia vincente della tesi. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.4.1, p. 23; §5.2.2, pp. 45-46; §5.2.5, p. 51; tab. 5.7, 5.11-5.15, pp. 74-89); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§2); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 23, 27).

## Prerequisiti
- [[Copula gaussiana]]: stesso parametro di correlazione $\rho$ e stessa relazione con $\tau$
- [[Distribuzione t di Student]]: marginali e $t_\nu^{-1}$
- [[Distribuzione chi-quadro]]: fattore di mescolamento $\chi^2_\nu/\nu$

## Porta a
- [[Criteri di informazione AIC e BIC]]: vince il confronto sul DAX
- [[Stima delle copule sul DAX]]: copula scelta per i dati

## Collegati
- [[Dipendenza di coda]]: presente, a differenza della gaussiana
- [[Tau di Kendall]]: stessa relazione della gaussiana
- [[Massima verosimiglianza per copule]]: stima congiunta di $\rho$ e $\nu$
