---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale]
livello: [triennale]
aliases: ["linear map", "linear transformation", "omomorfismo", "homomorphism", "mappa lineare", "a.l.", "endomorfismo", "endomorphism", "Hom(U,V)", "End(V)"]
tags: [competenza, area/algebra-geometria]
---

# Applicazione lineare

> Una mappa $f:U\to V$ tra spazi vettoriali sullo stesso campo che rispetta le combinazioni lineari: $f(\lambda u_1+\mu u_2)=\lambda f(u_1)+\mu f(u_2)$.

## Definizione / enunciato
$f:U\to V$ è un'**applicazione lineare** (omomorfismo) se è
- additiva: $f(u_1+u_2)=f(u_1)+f(u_2)$;
- omogenea di grado 1: $f(\lambda u)=\lambda f(u)$.

Le due condizioni insieme equivalgono a $f(\lambda u_1+\mu u_2)=\lambda f(u_1)+\mu f(u_2)$. Segue $f(0_U)=0_V$.

Notazioni:
- $\mathrm{Hom}_K(U,V)$: insieme delle applicazioni lineari $U\to V$;
- $\mathrm{End}_K(V)=\mathrm{Hom}_K(V,V)$: **endomorfismi**;
- monomorfismo = omomorfismo iniettivo, epimorfismo = suriettivo, isomorfismo = biiettivo, automorfismo = endomorfismo biiettivo.

**Determinazione tramite una base.** Un'a.l. è determinata dalle immagini dei vettori di una base del dominio: se $x=xe_1+ye_2+ze_3$ allora $f(x)=xf(e_1)+yf(e_2)+zf(e_3)$.

## Formule chiave
$$f\in\mathrm{Hom}(K^m,K^n)\iff\exists!\,F\in K^{n\times m}:\ f(x)=F\cdot x$$
Le colonne di $F$ sono $f(e_1),\dots,f(e_m)$, le righe descrivono le componenti dell'immagine.

## Intuizione
La linearità dice che $f$ "trasporta" la struttura: l'immagine di una combinazione lineare è la combinazione delle immagini. Per questo basta conoscerla su una base, e per questo ogni a.l. tra spazi $K^n$ è una moltiplicazione per una matrice. La regola "righe per colonne" del prodotto matriciale trova qui la sua giustificazione.

## Come si usa
- Le a.l. $\mathbb R\to\mathbb R$ sono tutte e sole $f(x)=ax$, con $a=f(1)$ (p. 9 di `11_Linear_Mappings.pdf`).
- La derivata $D:C^1(I)\to C^0(I)$ è lineare (p. 9); anche la trasposizione $A\mapsto{}^tA$ è lineare, e anzi è un isomorfismo.
- Verificare la non linearità: basta $f(0)\neq0$ o un termine non omogeneo di primo grado.
- Esempio (p. 32): $f(x,y,z,t)=(x-y-t,\ x-z-t,\ y-z)$; si scrive la matrice associata leggendo i coefficienti riga per riga.

## Nei corsi
- **Algebra lineare** (triennale): applicazioni lineari (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 2-34); `Appunti, riassunti e formulari/ApplicazioniLineari1_APPLICAZIONI.pdf`; `Appunti, riassunti e formulari/ap-lin-slides.pdf` (R. Notari); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §6).
- **Analisi funzionale** (triennale): richiamo nel cap. 1 (Def. 1.19, Prop. 1.20, 1.22): $\mathcal L(V,W)$ è un sottospazio di $F(V,W)$, composizioni e inverse di lineari sono lineari, nucleo e immagine sono sottospazi, $\dim\operatorname{Ker}T+\dim\operatorname{Im}T=\dim V$, e una lineare si assegna liberamente su una base. Nel corso le applicazioni lineari fra spazi normati si chiamano **operatori**; in dimensione infinita una lineare può non essere continua, da cui la nozione di operatore limitato. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§1.3, pp. 7-9); `triennale/ANNO 3/analisi funzionale/01_spazivettoriali_handout.pdf` (pp. 10-13).

## Prerequisiti
- [[Spazio vettoriale]]: mappe che rispettano la struttura

## Porta a
- [[Matrice associata a un'applicazione lineare]]: f(x) = Fx nelle basi scelte
- [[Nucleo e immagine]]: i due sottospazi che descrivono f
- [[Isomorfismo di spazi vettoriali]]: a.l. biiettive
- [[Autovalori e autovettori]]: direzioni invarianti di un endomorfismo
- [[Operatore lineare limitato]]: applicazioni lineari continue fra spazi normati (Analisi funzionale)

## Collegati
- [[Funzioni iniettive e suriettive]]: nozioni insiemistiche specializzate alle a.l.
