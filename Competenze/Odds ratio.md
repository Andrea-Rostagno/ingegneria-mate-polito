---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["odds ratio", "OR", "log odds ratio", "LOR", "rapporto delle quote", "rischio relativo", "relative risk", "RR", "quota", "odds", "tabella 2x2", "studio caso-controllo", "case-control study"]
tags: [competenza, area/statistica]
---

# Odds ratio

> Misura di associazione in una tabella $2\times2$: il rapporto tra le quote di successo di due gruppi. Il suo logaritmo è asintoticamente normale con varianza stimata dalla somma dei reciproci delle quattro celle, ed è l'unica misura stimabile da uno studio caso-controllo.

## Definizione / enunciato
Con $\pi_{S\mid T}$ e $\pi_{S\mid\bar T}$ probabilità di successo nei gruppi trattato e controllo (libro, cap. 16, Def. 16.2-16.3): rischio relativo $\mathrm{RR}=\pi_{S\mid T}/\pi_{S\mid\bar T}$;
$$\mathrm{OR}=\frac{\pi_{S\mid T}/(1-\pi_{S\mid T})}{\pi_{S\mid\bar T}/(1-\pi_{S\mid\bar T})},\qquad\mathrm{LOR}=\log\mathrm{OR}=\operatorname{logit}(\pi_{S\mid T})-\operatorname{logit}(\pi_{S\mid\bar T}).$$

## Formule chiave
- **Distribuzione asintotica** (Prop. 16.6, col metodo delta): $\widehat{\mathrm{LOR}}=\log\frac{N_{11}N_{22}}{N_{12}N_{21}}$, $\widehat{\operatorname{Var}}(\widehat{\mathrm{LOR}})=\frac1{N_{11}}+\frac1{N_{12}}+\frac1{N_{21}}+\frac1{N_{22}}$, IC $\widehat{\mathrm{LOR}}\pm z_{\alpha/2}\sqrt{\cdots}$, poi esponenziale per l'OR.
- **Invarianza** (Prop. 16.8, Cornfield 1951): l'OR della malattia tra esposti e non esposti è uguale all'OR dell'esposizione tra malati e non malati, $=\pi_{11}\pi_{22}/(\pi_{12}\pi_{21})$.

## Intuizione
L'OR è simmetrico nel ruolo delle due variabili, quindi resta lo stesso se si campiona per esito (caso-controllo) invece che per esposizione; il rischio relativo no, e $P(M\mid E)$ non è stimabile da uno studio caso-controllo. Nella regressione logistica con predittore binario $\beta_1=\mathrm{LOR}$.

## Come si usa
Prova clinica (libro, §16.1-16.2): 100 pazienti per braccio, successi 70 e 55; $\hat\pi=0.70$ e $0.55$, differenza 0.15, RR $=1.273$, OR $=1.909$, $\widehat{\mathrm{LOR}}=0.647$, errore standard 0.2967, IC al 95% $[0.065;\ 1.228]$ e per l'OR $[1.07;\ 3.41]$: non contiene 1, il trattamento sperimentale è migliore al 5%.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 16, §16.1-16.3 (Def. 16.2-16.3, Prop. 16.6, 16.8, pp. 266-271). Fonti: `Libri/Modelli statistici/capitoli/cap16.tex`; `magistrale/Modelli statistici/251217 Due variabili categoriche.pdf` (manoscritto); `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf` §1.4-1.5.

## Prerequisiti
- [[Metodo delta]]: varianza asintotica del logaritmo
- [[Distribuzione binomiale]]: campionamento per riga

## Porta a
- [[Regressione logistica]]: $e^{\beta_j}$ è un odds ratio
- [[Schemi di campionamento delle tabelle di contingenza]]: quale misura è stimabile in ciascuno

## Collegati
- [[Test esatto di Fisher]]: test di OR $=1$ a margini fissi
- [[Test chi-quadro di indipendenza e omogeneità]]: OR $=1$ equivale a indipendenza nella $2\times2$
