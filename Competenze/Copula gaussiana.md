---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Gaussian copula", "copula normale", "normal copula", "copula Gaussiana", "C^Ga", "C_R^Ga"]
tags: [competenza, area/probabilita]
---

# Copula gaussiana

> La copula estratta da una normale multivariata: dipendenza ellittica descritta da una sola correlazione $\rho$, senza dipendenza di coda.

## Definizione / enunciato
Caso bivariato (tesi §3.4.1; Pellerey, slide 23):
$$C^{Ga}_\rho(u,v)=\Phi_\rho\big(\Phi^{-1}(u),\Phi^{-1}(v)\big)=\int_{-\infty}^{\Phi^{-1}(u)}\!\!\int_{-\infty}^{\Phi^{-1}(v)}\frac{1}{2\pi\sqrt{1-\rho^2}}\exp\!\Big(\frac{2\rho st-s^2-t^2}{2(1-\rho^2)}\Big)ds\,dt,$$
con $\rho\in[-1,1]$, $\Phi_\rho$ f.d.r. normale bivariata standard con correlazione $\rho$. In dimensione $p$: $C(\mathbf u)=\Phi_\Sigma(\Phi^{-1}(u_1),\dots,\Phi^{-1}(u_p))$ (`Elenco Copule.pdf` §2.1).

## Formule chiave
- Densità: $c(u,v;\rho)=\dfrac1{\sqrt{1-\rho^2}}\exp\!\Big(-\dfrac{\rho^2(x^2+y^2)-2\rho xy}{2(1-\rho^2)}\Big)$, $x=\Phi^{-1}(u)$, $y=\Phi^{-1}(v)$.
- Tau di Kendall: $\tau=\frac2\pi\arcsin\rho$, quindi $\rho=\sin(\pi\tau/2)$ (tesi §5.2.5).
- Nessuna dipendenza di coda: la tesi la presenta come "non in grado di catturare la dipendenza dalla coda".

## Intuizione
Copula gaussiana e distribuzione gaussiana non sono la stessa cosa (Pellerey, slide 25-26): la copula si può montare su marginali qualsiasi (per esempio t di Student), conservando solo la "forma" della dipendenza normale. Il suo difetto è proprio la coda: gli eventi estremi congiunti diventano asintoticamente indipendenti.

## Come si usa
- **Stima sul DAX** (volatilità rolling di Open e Close): MLE $\rho=0.8569$ (log-verosimiglianza 31393.9252), metodo dei momenti $\rho=0.8606$, MCMC $\rho=0.863$; media $\rho=0.8602$ (tabelle 5.7, 5.11-5.13).
- È la copula usata nell'esempio di Metropolis-Hastings (§5.2.9) e nella simulazione del portafoglio long (§6.1.3), dove però si fissa $\rho=0.95$.
- Esempio critico di Pellerey (slide 49-51): il modello di Li per i default usa la copula gaussiana e sottostima i default a grappolo.

## Nei corsi
- **Prova finale** (triennale): definizione integrale, densità, relazione con $\tau$, stima con tre metodi. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.4.1, p. 23; §5.2.5, p. 51; §5.3.4, p. 77; tab. 5.7-5.13, pp. 74-87); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§1); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 23-26).

## Prerequisiti
- [[Copula]]: definizione generale
- [[Vettore gaussiano]]: la copula è quella della normale multivariata
- [[Distribuzione normale]]: $\Phi$ e $\Phi^{-1}$

## Porta a
- [[Copula t di Student]]: generalizzazione con code pesanti
- [[Simulazione da una copula]]: si simula una normale bivariata e si applica $\Phi$
- [[Copule nel rischio di credito]]: modello di Li

## Collegati
- [[Tau di Kendall]]: $\tau=\frac2\pi\arcsin\rho$
- [[Dipendenza di coda]]: assente nella gaussiana
- [[Coefficiente di correlazione]]: $\rho$ è la correlazione della normale sottostante
