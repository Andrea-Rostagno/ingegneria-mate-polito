---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["boundary value problem", "BVP", "problema con condizioni ai limiti", "condizioni al bordo", "condizioni di Dirichlet", "condizioni di Neumann", "condizioni di Robin", "condizioni miste", "equazione di diffusione-trasporto-reazione", "modello del filo elastico", "condizioni al contorno", "condizioni di Navier", "condizione di compatibilità di Neumann"]
tags: [competenza, area/numerica]
---

# Problema ai limiti

> Equazione differenziale (tipicamente del secondo ordine) con condizioni assegnate in due punti distinti $a$ e $b$; a differenza del problema di Cauchy, la regolarità di $f$ non basta per esistenza e unicità.

## Definizione / enunciato
Esempio tipico: $u''=f(x,u,u')$ su $[a,b]$ con $u(a)=\alpha$, $u(b)=\beta$; le condizioni possono anche non essere separate, $g(u(a),u(b))=0$. Tipi di condizioni:
- **Dirichlet**: valori di $u$ ai bordi;
- **Neumann**: valori di $u'$ ai bordi;
- **miste**: $u$ in un estremo, $u'$ nell'altro;
- **Robin**: $a_0u(a)-a_1u'(a)=\alpha$, $b_0u(b)+b_1u'(b)=\beta$;
- **omogenee** se i valori prescritti sono nulli.

**Teorema (caso lineare).** Per $u''=p(x)u'+q(x)u+r(x)$ con $p,q,r\in C^0([a,b])$ e condizioni di Robin, se
$$q(x)>0,\quad a_0a_1\ge0,\quad b_0b_1\ge0,\quad|a_0|+|a_1|\ne0,\quad|b_0|+|b_1|\ne0,\quad|a_0|+|b_0|\ne0,$$
la soluzione esiste ed è unica. Le condizioni sono sufficienti, non necessarie (con Neumann e $q>0$ la soluzione è comunque unica).

## Formule chiave
Modelli: **filo elastico** $-(\mu u')'=f$ su $[0,L]$, $u(0)=u(L)=0$ (spostamento); **sbarra termica** $-(\kappa u')'=\rho q$ (temperatura, con $u(L)$ oppure il flusso $u'(L)$ assegnato); **diffusione-trasporto-reazione** $-u''+p(x)u'+q(x)u=r(x)$ (diffusione $u''$, trasporto $pu'$, reazione $qu$, produzione $r$).

## Intuizione
Nel problema di Cauchy tutta l'informazione sta in un punto e la soluzione "parte" da lì; qui deve soddisfare un vincolo anche all'arrivo, e non è detto che una soluzione dell'equazione ci riesca.

## Come si usa
Esempio delle slide: $u''+u=0$ ha integrale generale $c_1\sin x+c_2\cos x$. Con $u(0)=0$, $u(\pi/2)=1$ la soluzione è unica ($\sin x$); con $u(0)=0$, $u(\pi)=1$ non esiste; con $u(0)=u(\pi)=0$ ce ne sono infinite ($c\sin x$). Altro esempio: $u''=u$, $u'(0)=0$, $u'(1)=1$ ha l'unica soluzione $u=\frac e{e^2-1}(e^x+e^{-x})$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_08_ode_valori_limiti_print.pdf` (p. 2-11).
- **Equazioni alle derivate parziali** (triennale): versione per EDP di ordine $k$: $F(x,D^\alpha u)=0$ in $\Omega$, $\mathcal B(D^\beta u)=0$ su $\partial\Omega$ con $|\beta|<k$ (2.8). Condizioni: Dirichlet $u=g$; Neumann $\partial_\nu u=g$; Robin $au+b\partial_\nu u=g$; Navier $u=\Delta u=0$ (problemi del quart'ordine, bilaplaciano); condizioni iniziali per equazioni di evoluzione. Es. 2.3.2: per il problema di Neumann di Poisson la soluzione esiste solo se i dati soddisfano una condizione di compatibilità ottenuta col teorema della divergenza, ed è unica a meno di costanti. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 12-14).
- **Equazioni di fisica matematica** (triennale): per una PDE in $\Omega\times(0,+\infty)$ con $\Omega$ aperto, la condizione $u=g$ su $\partial\Omega$ è di **Dirichlet**, $\frac{\partial u}{\partial n}=h$ ($n$ normale uscente) è di **Neumann**; sono **omogenee** se $g=0$ o $h=0$. Per il calore la Neumann omogenea esprime il flusso nullo $F\cdot n=0$ con $F=-D\nabla u$. Sono usate per l'onda sulla semiretta e sull'intervallo e per i problemi agli autovalori di $-\Delta$. Fonti: `triennale/ANNO 3/eq fisica matematica/23 - Lezione 29_11_23 (1).pdf` (p. 4); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (p. 4).

## Prerequisiti
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: integrale generale degli esempi
- [[Problema di Cauchy]]: confronto con le condizioni in un solo punto

## Porta a
- [[Metodo delle differenze finite]]: risoluzione numerica
- [[Numero di Péclet]]: problemi a trasporto dominante
- [[Buona positura secondo Hadamard]]: quando un problema al contorno per un'EDP è ben posto
- [[Problema di Dirichlet per l'equazione di Poisson]]: il problema al contorno modello per le EDP ellittiche
- [[Equazione delle onde sulla semiretta]]: dato al bordo di Dirichlet o di Neumann in x = 0 (Equazioni di fisica matematica)
- [[Autovalori e autofunzioni del laplaciano]]: −Δφ = λφ con condizioni omogenee (Equazioni di fisica matematica)

## Collegati
- [[Equazione del calore]]: la sbarra termica è il caso stazionario della diffusione (collegamento concettuale, non nelle slide)
- [[Principio del massimo di Hopf]]: dà l'unicità a meno di costanti per le condizioni di Neumann
