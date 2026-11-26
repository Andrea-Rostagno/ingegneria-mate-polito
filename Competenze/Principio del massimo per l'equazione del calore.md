---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["maximum principle for the heat equation", "principio del massimo parabolico", "frontiera parabolica", "cilindro parabolico", "unicità per l'equazione del calore", "metodo energetico per il calore"]
tags: [competenza, area/analisi]
---

# Principio del massimo per l'equazione del calore

> Una soluzione del calore sul cilindro $\Omega\times(0,T]$ assume il massimo sulla frontiera parabolica (base e pareti laterali); ne segue l'unicità del problema di Dirichlet, dimostrabile anche col metodo dell'energia.

## Definizione / enunciato
$\Omega_T:=\Omega\times(0,T]$ cilindro parabolico, $\Gamma_T:=\overline{\Omega_T}\setminus\Omega_T$ **frontiera parabolica**: contiene la faccia inferiore $\Omega\times\{0\}$ e le pareti, non la faccia superiore $\Omega\times\{T\}$.

**Teorema 6.4.2.** Sia $u$ di classe $C^2$ in spazio e $C^1$ in tempo su $\Omega_T$, soluzione di $\partial_tu-\Delta_xu=0$, con $u\in C^0(\overline{\Omega_T})$. Allora
1. (debole) $\displaystyle\max_{\overline{\Omega_T}}u=\max_{\Gamma_T}u$;
2. (forte) se $\Omega$ è connesso ed esiste $(x_0,t_0)\in\Omega_T$ con $u(x_0,t_0)=\max_{\overline{\Omega_T}}u$, allora $u$ è costante in $\overline{\Omega_{t_0}}$ (per tutti i tempi precedenti a $t_0$).

**Prop. 6.4.3 (unicità).** Il problema di Dirichlet $\partial_tu-\Delta_xu=f$ in $\Omega_T$, $u=g$ su $\Gamma_T$ ($DP^f_g$) ha al più una soluzione (sotto ipotesi sensate sui dati).

## Formule chiave
Siano $u,\tilde u$ due soluzioni, $w=u-\tilde u$ risolve $(DP^0_0)$.
1. **Principio del massimo**: applicato a $\pm w$, massimo e minimo stanno su $\Gamma_T$, dove $w=0$.
2. **Metodo energetico**: con $e(t):=\frac12\int_\Omega|w(x,t)|^2dx$,
$$\dot e(t)=\int_\Omega w\,\partial_tw\,dx=\int_\Omega w\,\Delta_xw\,dx=-\int_\Omega|\nabla w|^2dx\le0,$$
quindi $e(t)\le e(0)=0$ e $w\equiv0$.

## Intuizione
Il calore fluisce dal caldo al freddo: un massimo non può nascere all'interno né sul "coperchio" $t=T$ senza essere già presente prima, sulla base o sulle pareti. Nella forma forte l'informazione si propaga solo verso il passato del punto di massimo, non verso il futuro.

## Come si usa
Unicità e confronto per problemi al bordo del calore su domini limitati; l'energia $\frac12\|w\|^2_{L^2}$ decrescente è anche una stima di stabilità in $L^2$. Le formule di rappresentazione su $\mathbb R^n$ non danno unicità da sole (Oss. 6.2.5).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §6.4.2 "Principio del massimo" (Teor. 6.4.2 con rinvio a Evans §2.3.3 Teor. 4 p. 54; Prop. 6.4.3 con le due dimostrazioni). La fonte scrive il dato come "$u(\cdot,0)=g$ su $\Gamma_T$". Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 66-67).

## Prerequisiti
- [[Equazione del calore]]: l'equazione omogenea sul cilindro
- [[Proprietà di media per l'equazione del calore]]: strumento per la forma forte (Evans)

## Collegati
- [[Principio del massimo per le funzioni armoniche]]: analogo ellittico
- [[Formule di rappresentazione per l'equazione del calore]]: esistenza su $\mathbb R^n$, unicità da qui
- [[Metodo dell'energia]]: la seconda dimostrazione di unicità (energia $\frac12\int w^2$ decrescente)
